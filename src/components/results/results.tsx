import React, { useEffect, useState } from 'react';
import './results.scss';
import { PrizeTier } from '../prize-tier/prize-tier';
import { Result as IResult } from '../../interfaces/result';
import { Prize as IPrize } from '../../interfaces/prize';
import moment from 'moment';

const apiUrl: string = process.env.REACT_APP_APIURL || '';

export const Results: React.FC = () => {
    const shortDateFormat = 'D.MM.YYYY';
    const longDateFormat = 'dddd D MMM YYYY';

    const [isLoaded, setLoaded] = useState<boolean>(false);
    const [currentDraw, setCurrent] = useState<IResult>();
    useEffect(() => {

        fetch(apiUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET'
            },
        })
            .then((response: Response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(response => {
                setCurrent(response.last);
                setLoaded(true);
            })
            .catch((error: Error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });

        return () => {
        };
    }, []);

    const [prizes, setPrizes] = useState<IPrize[]>();
    useEffect(() => {
        if (currentDraw) {
            let rankArray: any = Object.entries(currentDraw.odds!);
            rankArray = rankArray.map(
                ([label, prize]: [string, IPrize]) => {
                    prize.order = parseInt(label.substr(4), 10);
                    prize.prize = prize.prize / 100;
                    return prize;
                });
            rankArray.sort((a: IPrize, b: IPrize) => {
                return a.order - b.order;
            });
            setPrizes(rankArray);
        }
    }, [currentDraw]);

    const [momentDrawDate, setMomentDrawDate] = useState<{}>({});
    useEffect(() => {
        if (currentDraw) {
            let { day, month, year, hour, minute } = currentDraw.date;
            month--;
            setMomentDrawDate({ day, month, year, hour, minute });
        }
    }, [currentDraw]);

    const [shortDate, setShortDate] = useState<string>();
    useEffect(() => {
        if (momentDrawDate) {
            setShortDate(moment(momentDrawDate).format(shortDateFormat));
        }
    }, [momentDrawDate]);

    return (
        ( isLoaded ) ? (
            <article className="results">
                <section className="results__legend">
                    <span className="euro-jackpot-color">EuroJackpot</span> Results
                    for {( moment(momentDrawDate).format(longDateFormat) )}
                </section>
                <section className="results__numbers">
                    <ul className="draw-result">
                        {
                            currentDraw?.numbers!
                                .map((number: number) => <li
                                    className="draw-result__number" key={number}>{number}</li>)
                        }
                        {
                            currentDraw!.euroNumbers!
                                .map((number: number) => <li
                                    className="draw-result__number draw-result__number--extra"
                                    key={number}>{number}</li>)
                        }
                    </ul>
                </section>
                <section className="results__body">
                    <div className="results__tiers">
                        <table className="results__table">
                            <thead>
                            <tr>
                                <th>Tier</th>
                                <th>Match</th>
                                <th>Winners</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                prizes!.map((prize: IPrize, index: number) => {
                                    return ( <PrizeTier prize={prize} rank={index} key={index}/> )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="results__cards">
                        <section className="results__card card">
                            <h2 className="card__header">
                                The EuroJackpot numbers for {shortDate}
                            </h2>
                            <p className="card__text"><strong>The 408th draw for the EuroJackpot was held on {shortDate},</strong> as
                                usual at {moment(momentDrawDate).format('h a')} in Helsinki.</p>
                        </section>
                        <section className="results__card card">
                            <h2 className="card__header">
                                The EuroJackpot numbers for {shortDate}
                            </h2>
                            <p className="card__text">
                                The balls used for the draw are made of a synthetic polymer, softer than ping-pong
                                balls. The results are broadcast after the draw, with the draw-machines independently
                                checked by the VTT Technical Research Center of Finland.
                            </p>
                            <p className="card__text">
                                Lottoland published the draw results immediately after the draw on {shortDate}.
                            </p>
                        </section>
                    </div>
                </section>
            </article>
        ) : null
    )
};

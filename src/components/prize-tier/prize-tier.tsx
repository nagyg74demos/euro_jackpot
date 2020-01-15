import React from 'react';
import { romanize } from 'romans';
import NumberFormat from 'react-number-format';
import './prize-tier.scss'
import { Prize as IPrize } from '../../interfaces/prize';

const tierMatch = [
  [0,0],
  [5,2],
  [5,1],
  [5,0],
  [4,2],
  [4,1],
  [4,0],
  [3,2],
  [2,2],
  [3,1],
  [3,0],
  [1,2],
  [2,1],
];

interface ITier {
    rank: number;
    prize: IPrize;
}

export const PrizeTier: React.FC<ITier> = ({ prize, rank }: ITier) => {
    return (
        ( rank > 0 ) ? (
            <tr className="PrizeTier">
                <td>{romanize(rank)}</td>
                <td>{tierMatch[rank][0]}&nbsp;Numbers&nbsp;+ {tierMatch[rank][1]}&nbsp;Euronumbers</td>
                <td><NumberFormat value={prize.winners} displayType={'text'} thousandSeparator={true} suffix={'x'} /></td>
                <td><NumberFormat value={prize.prize} displayType={'text'} thousandSeparator={true} prefix={'€'} decimalScale={2} fixedDecimalScale={true} /></td>
            </tr>
        ) : null
    );
};

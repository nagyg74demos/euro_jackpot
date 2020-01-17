import React, { ChangeEvent, useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import './draw-selector.scss';

const availableYearsCount = 9;
const dataDateFormat = 'YYYY-MM-DD';
const displayDateFormat = 'ddd DD MMM';

export const DrawSelector: React.FC = () => {
        const [drawYear, setDrawYear] = useState<number>(moment().year());
        const [drawDate, setDrawDate] = useState<string>('');

        const [drawYearList, setDrawYearList] = useState<number[]>([]);
        useEffect(() => {
            const years = new Array(availableYearsCount).fill(0);
            const currentYear = moment().year();
            years.forEach((v, i, a) => a[ i ] = currentYear - i);
            setDrawYearList(years);
        }, []);

        const [drawDateList, setDrawDateList] = useState<Moment[]>([]);
        useEffect(() => {
            if (drawYear) {
                const today = moment();
                const fridays = [];
                const year = moment().year(drawYear).dayOfYear(1);
                while (year.year() === drawYear) {
                    year.weekday(5);
                    if (year.isBefore(today)) {
                        fridays.push(year.clone());
                    }
                    year.add(7, 'd');
                }
                fridays.reverse();
                setDrawDate('');
                setDrawDateList(fridays);
            }
        }, [drawYear]);

        const yearOnSelect = (event: ChangeEvent<HTMLSelectElement>) => setDrawYear(parseInt(event.target.value));
        const dateOnSelect = (event: ChangeEvent<HTMLSelectElement>) => setDrawDate(moment(event.target.value).format(dataDateFormat).toString());

        return (
            <section className="draw-selector">
                <div className="select-box">
                    <select name="drawDate"
                            id="drawDate"
                            className="draw-selector__date select-box__dropdown"
                            disabled={!drawDateList.length}
                            value={drawDate}
                            onChange={dateOnSelect}
                            onBlur={dateOnSelect}>
                        <option>Please select</option>
                        {
                            ( drawDateList.length ) ? (
                                drawDateList
                                    .map((date, i) => (
                                            <option value={date.format(dataDateFormat)}
                                                    key={i}>{date.format(displayDateFormat)}</option>
                                        )
                                    )
                            ) : null
                        }
                    </select>
                </div>
                <div className="select-box">
                    <select name="drawYear"
                            id="drawYear"
                            className="draw-selector__year select-box__dropdown"
                            value={drawYear}
                            onChange={yearOnSelect}
                            onBlur={yearOnSelect}>
                        {
                            drawYearList.map((v, i) => <option value={v} key={v}>{v}</option>)
                        }
                    </select>
                </div>
            </section>
        );
    }
;

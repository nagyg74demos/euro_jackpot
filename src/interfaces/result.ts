import { CustomDate } from './custom-date';
import { Odds } from './odds';

export interface Result {
    nr: number;
    currency: string;
    date: CustomDate;
    closingDate: string
    lateClosingDate: string
    drawingDate: string
    numbers?: number[];
    euroNumbers?: number[];
    jackpot: string;
    marketingJackpot: string;
    specialMarketingJackpot: string;
    climbedSince: number;
    Winners?: number;
    odds?: Odds;
}

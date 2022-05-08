import { ICancellations } from './ICancellations';
import { IClaims } from './IClaims';
import { IDelayedHandlingTime } from './IDelayedHandlingTime';
import { ISales } from './ISales';

export interface IMetrics {
    cancellations: ICancellations;
    claims: IClaims;
    delayed_handling_time: IDelayedHandlingTime;
    sales: ISales;
}
import { ISnapshot } from './ISnapshot';

export interface IDescription {
    text: string | null;
    plain_text: string;
    last_updated: Date;
    date_created: Date;
    snapshot: ISnapshot;
}
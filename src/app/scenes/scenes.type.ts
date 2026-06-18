import { Editable } from '../shared/editable/editable.type';

export interface Scene extends Editable {
    date: string;
    description: string;
    notes: string;
}

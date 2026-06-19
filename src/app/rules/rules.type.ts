import { Editable } from '../shared/editable/editable.type';

export interface Rule extends Editable {
    summary: string;
    details: string;
}

export type MoveDirection = 'up' | 'down';

import { IFuseOptions } from 'fuse.js';

import { defaultFuseOptions } from '../shared/config';
import { Rule } from './rules.type';

export const name = 'Rules';
export const queryParamKey = 'id';

export const importLabel = `Import ${name} JSON`;
export const exportLabel = `Export ${name} JSON`;

export const defaultRule = { title: 'New Rule', summary: '', details: '' };

export const fuseOptions: IFuseOptions<Rule> = {
    keys: ['title', 'summary', 'details'],
    ...defaultFuseOptions,
};

export default {
    name,
    queryParamKey,
    importLabel,
    exportLabel,
    defaultRule,
    fuseOptions,
};

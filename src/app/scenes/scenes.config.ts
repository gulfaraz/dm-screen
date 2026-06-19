import { IFuseOptions } from 'fuse.js';

import { defaultFuseOptions } from '../shared/config';
import { Scene } from './scenes.type';

export const name = 'Scenes';
export const queryParamKey = 'ids';

export const importLabel = `Import ${name} JSON`;
export const exportLabel = `Export ${name} JSON`;

export const defaultScene = {
    title: 'New Scene',
    date: '',
    description: '',
    notes: '',
};

export const fuseOptions: IFuseOptions<Scene> = {
    keys: ['title', 'date', 'description', 'notes'],
    ...defaultFuseOptions,
};

export default {
    name,
    queryParamKey,
    importLabel,
    exportLabel,
    defaultScene,
    fuseOptions,
};

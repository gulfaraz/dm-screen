import { IFuseOptions } from 'fuse.js';

export const debounceTime = 100;

export const defaultFuseOptions: IFuseOptions<unknown> = {
    threshold: 0.2,
    ignoreLocation: true,
    minMatchCharLength: 2,
};

export default { debounceTime, defaultFuseOptions };

export const name = 'Sound Board';

export const bgmPerSet = 6;

export const jumpTime = 15;

export const colours = [
    'secondary',
    'tertiary',
    'success',
    'dark',
    'medium',
    'danger',
];

export const importLabel = `Import ${name} JSON`;
export const exportLabel = `Export ${name} JSON`;

export const playerUpdateInterval = 100;

export const defaultBgm = {
    name: 'Why is you so mean to me',
    link: 'https://youtu.be/cM6hnp3iB5U',
};

export const defaultBgmVolume = 80;

export default {
    name,
    bgmPerSet,
    jumpTime,
    colours,
    importLabel,
    exportLabel,
    playerUpdateInterval,
    defaultBgm,
};

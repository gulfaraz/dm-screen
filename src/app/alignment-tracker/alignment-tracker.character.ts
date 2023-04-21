import config from './alignment-tracker-chart/alignment-tracker-chart.config';

export enum Alignment {
    Good = 'Good',
    Evil = 'Evil',
    Chaotic = 'Chaotic',
    Lawful = 'Lawful',
    Neutral = 'Neutral',
    TrueNeutral = 'True Neutral',
}

export class Character {
    constructor(
        public name: string,
        public ethical: number = config.jitter(),
        public moral: number = config.jitter(),
        public colour: string = config.colour(colours),
    ) {}

    alignment = () => {
        let alignment = String(Alignment.TrueNeutral);
        let ethicsValue = Alignment.Neutral;
        let moralityValue = Alignment.Neutral;
        if (this.ethical < -config.scaleThreshold) {
            ethicsValue = Alignment.Chaotic;
        } else if (this.ethical > config.scaleThreshold) {
            ethicsValue = Alignment.Lawful;
        }
        if (this.moral < -config.scaleThreshold) {
            moralityValue = Alignment.Evil;
        } else if (this.moral > config.scaleThreshold) {
            moralityValue = Alignment.Good;
        }
        if (
            ethicsValue != Alignment.Neutral ||
            moralityValue != Alignment.Neutral
        ) {
            alignment = `${ethicsValue} ${moralityValue}`;
        }
        return alignment;
    };
}

const colours = [
    '#2f4f4f',
    '#556b2f',
    '#8b4513',
    '#a52a2a',
    '#191970',
    '#708090',
    '#808000',
    '#483d8b',
    '#008000',
    '#663399',
    '#008080',
    '#b8860b',
    '#4682b4',
    '#000080',
    '#d2691e',
    '#800080',
    '#b03060',
    '#9932cc',
    '#ff4500',
    '#c71585',
    '#0000cd',
    '#4169e1',
    '#dc143c',
    '#9370db',
    '#0000ff',
    '#a020f0',
    '#ff6347',
    '#ff00ff',
    '#1e90ff',
    '#ff1493',
    '#264653',
    '#2a9d8f',
    '#e76f51',
];

export const characters: Character[] = [
    new Character('Mordenkainen', -4, 1, colours[0]),
    new Character('Tenser', 4, 4, colours[4]),
    new Character('Sprigg', -5, -3, colours[17]),
];

export interface SetCharacterNameEvent {
    character: Character;
    name: string;
}

export interface SetCharacterAlignmentEvent {
    character: Character;
    ethical: number;
    moral: number;
}

export default { Alignment, Character, characters };

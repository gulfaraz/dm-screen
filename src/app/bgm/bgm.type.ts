export interface BgmSet {
    name: string;
    items: Bgm[];
}

export interface Bgm {
    name: string;
    link: string;
    play?: boolean;
    loading?: boolean;
}

export interface BgmTogglePlaybackEvent {
    event: Event;
    bgm: Bgm | null;
}

export enum BgmPlaybackEvent {
    Play,
    Pause,
    Forward,
    Reverse,
}

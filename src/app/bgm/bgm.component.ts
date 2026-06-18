import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import {
    AccordionGroupCustomEvent,
    IonAccordion,
    IonAccordionGroup,
    IonCol,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonReorder,
    IonReorderGroup,
    IonRow,
    ReorderEndCustomEvent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { debounce } from 'lodash';

import sharedConfig from '../shared/config';
import { FooterComponent } from '../shared/footer/footer.component';
import { GuideComponent } from '../shared/guide/guide.component';
import { JsonExporterComponent } from '../shared/json-exporter/json-exporter.component';
import { JsonImporterComponent } from '../shared/json-importer/json-importer.component';
import {
    defaultBgm,
    exportLabel,
    importLabel,
    jumpTime,
    name,
} from './bgm.config';
import bgmSeed from './bgm.seed.json';
import {
    Bgm,
    BgmPlaybackEvent,
    BgmSet,
    BgmTogglePlaybackEvent,
} from './bgm.type';
import { BgmButtonsComponent } from './bgm-buttons/bgm-buttons.component';
import { BgmEditorComponent } from './bgm-editor/bgm-editor.component';
import { BgmPlayerComponent } from './bgm-player/bgm-player.component';

addIcons({ add });

@Component({
    selector: 'app-bgm',
    templateUrl: './bgm.component.html',
    imports: [
        IonContent,
        IonList,
        IonRow,
        IonCol,
        IonAccordionGroup,
        IonAccordion,
        IonItem,
        IonInput,
        IonIcon,
        IonLabel,
        IonReorderGroup,
        IonReorder,
        BgmPlayerComponent,
        YouTubePlayer,
        FormsModule,
        BgmButtonsComponent,
        BgmEditorComponent,
        GuideComponent,
        JsonImporterComponent,
        JsonExporterComponent,
        FooterComponent,
    ],
})
export class BgmComponent {
    private router = inject(Router);

    name = name;

    player!: YT.Player;
    bgmSets: BgmSet[] = [];
    openBgmSets: Record<BgmSet['id'], boolean> = {};
    bgm: Bgm | null = null;
    storageKey = 'bgm-sets';
    importLabel = importLabel;
    exportLabel = exportLabel;
    isInitialLoad = true;
    loading = true;
    error = false;
    isPlaying = false;

    constructor() {
        try {
            const storedBgmSets = localStorage.getItem(this.storageKey);
            if (storedBgmSets && storedBgmSets.length > 2) {
                this.import(JSON.parse(storedBgmSets));
            } else {
                this.import(Array.from(bgmSeed));
            }
        } catch {
            this.import(Array.from(bgmSeed));
        }
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (this.router.url !== '/sound-board') return;

        if (!(event.target instanceof HTMLInputElement)) {
            if (
                event.code === 'Space' ||
                event.code === 'ArrowRight' ||
                event.code === 'ArrowLeft'
            ) {
                event.preventDefault();
            }

            if (event.code === 'Space') {
                this.togglePlayback({ event, bgm: this.bgm });
            } else if (event.code === 'ArrowRight') {
                this.playbackEvent(BgmPlaybackEvent.Forward);
            } else if (event.code === 'ArrowLeft') {
                this.playbackEvent(BgmPlaybackEvent.Reverse);
            }
        }
    }

    getVideoId = (url?: string) => {
        const regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url?.match(regExp);

        // pass control to user on error
        if (!match && this.loading) this.playerError();

        return match && match[7].length == 11 ? match[7] : '';
    };

    playerReady = (event: YT.PlayerEvent) => {
        this.player = event.target;

        if (this.isInitialLoad) {
            this.isInitialLoad = false;
            this.loading = false;

            // prevent autoplay on initial load
            setTimeout(() => this.playbackEvent(BgmPlaybackEvent.Pause), 1000);
        }
    };

    togglePlayback = (togglePlaybackEvent: BgmTogglePlaybackEvent) => {
        togglePlaybackEvent.event.stopPropagation();

        const isPlaying = this.player.getPlayerState() === 1;
        const isToggleOnly = this.bgm === togglePlaybackEvent.bgm;
        if (!isToggleOnly && togglePlaybackEvent.bgm) {
            this.setBgm(togglePlaybackEvent.bgm);
        } else {
            if (isPlaying) {
                this.player.pauseVideo();
            } else {
                this.player.playVideo();
            }
        }
    };

    setBgm = (bgm: Bgm) => {
        this.loading = true;
        this.bgm = bgm;
    };

    addBgmSet = () => {
        const id = crypto.randomUUID();
        const name = `Sound Group ${this.bgmSets.length + 1}`;
        this.bgmSets.push({
            id,
            name,
            items: [{ ...defaultBgm }, { ...defaultBgm }],
        });
        this.openBgmSets[id] = true;
        this.save();
    };

    get openBgmSetIds() {
        return Object.keys(this.openBgmSets);
    }

    onToggleBgmSet = (event: AccordionGroupCustomEvent<BgmSet['id'][]>) => {
        if (event.target !== event.currentTarget) {
            return;
        }

        const bgmSetIds = event.detail.value ?? [];
        this.openBgmSets = Object.fromEntries(
            bgmSetIds.map((bgmSetId) => [bgmSetId, true]),
        );
    };

    deleteBgmSet = (bgmSetId: BgmSet['id']) => {
        this.bgmSets = this.bgmSets.filter(({ id }) => id !== bgmSetId);
        delete this.openBgmSets[bgmSetId];
        this.save();
    };

    playbackEvent = (bgmPlaybackEvent: BgmPlaybackEvent) => {
        if (bgmPlaybackEvent === BgmPlaybackEvent.Play) {
            this.player.playVideo();
        } else if (bgmPlaybackEvent === BgmPlaybackEvent.Pause) {
            this.player.pauseVideo();
        } else if (bgmPlaybackEvent === BgmPlaybackEvent.Forward) {
            this.player.seekTo(this.player.getCurrentTime() + jumpTime, true);
        } else if (bgmPlaybackEvent === BgmPlaybackEvent.Reverse) {
            this.player.seekTo(this.player.getCurrentTime() - jumpTime, true);
        }
    };

    debouncePlayerState = debounce((playerState: YT.PlayerState) => {
        this.error = false;
        this.isPlaying = playerState === YT.PlayerState.PLAYING;
        this.loading = false;

        this.bgmSets.forEach((bgmSet: BgmSet) =>
            bgmSet.items.forEach((bgm: Bgm) => {
                bgm.loading = false;
                bgm.play = this.bgm === bgm && this.isPlaying;
            }),
        );
    }, sharedConfig.debounceTime);

    playerError = () => {
        this.error = true;
        this.isPlaying = false;
        this.loading = false;

        this.bgmSets.forEach((bgmSet: BgmSet) =>
            bgmSet.items.forEach((bgm: Bgm) => {
                bgm.loading = false;
                bgm.play = false;
            }),
        );
    };

    volumeEvent = (volume: number) =>
        volume ? this.player.setVolume(volume) : null;

    save = () =>
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(
                this.bgmSets.map(({ id, name, items }) => ({
                    id,
                    name,
                    items: items.map(({ name, link }) => ({ name, link })),
                })),
            ),
        );

    import = (bgmSets: BgmSet[]) => {
        this.bgmSets = bgmSets;
        this.setBgm(this.bgmSets[0].items[0]);
    };

    onReorderEnd(event: ReorderEndCustomEvent) {
        const { from, to, complete } = event.detail;

        if (from === to) return complete(false);

        const movedBgmSet = this.bgmSets.splice(from, 1)[0];
        this.bgmSets.splice(to, 0, movedBgmSet);
        this.save();

        complete(false);
    }
}

import { Component, HostListener, ViewChild } from '@angular/core';

import bgmSets from './bgm.sets.json';
import {
    Bgm,
    BgmPlaybackEvent,
    BgmSet,
    BgmTogglePlaybackEvent,
} from './bgm.type';
import { jumpTime } from './bgm.config';
import { debounce } from 'lodash';
import sharedConfig from '../shared/config';
import { BgmGuideComponent } from './bgm-guide/bgm-guide.component';
import { BgmPlayerComponent } from './bgm-player/bgm-player.component';
import { YouTubePlayer } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';
import { BgmButtonsComponent } from './bgm-buttons/bgm-buttons.component';
import { BgmEditorComponent } from './bgm-editor/bgm-editor.component';
import { BgmSetImporterComponent } from './bgm-set-importer/bgm-set-importer.component';
import { BgmSetExporterComponent } from './bgm-set-exporter/bgm-set-exporter.component';
import { FooterComponent } from '../shared/footer/footer.component';
import {
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

addIcons({ add });

@Component({
    selector: 'app-bgm',
    templateUrl: './bgm.component.html',
    styleUrls: ['./bgm.component.scss'],
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
        BgmGuideComponent,
        BgmPlayerComponent,
        YouTubePlayer,
        FormsModule,
        BgmButtonsComponent,
        BgmEditorComponent,
        BgmSetImporterComponent,
        BgmSetExporterComponent,
        FooterComponent,
    ],
})
export class BgmComponent {
    @ViewChild('accordionGroup') accordionGroup!: IonAccordionGroup;

    player!: YT.Player;
    bgmSets: BgmSet[] = Array.from(bgmSets);
    bgm = this.bgmSets[0].items[0];
    storageKey = 'bgm-sets';
    isInitialLoad = true;
    loading = true;
    error = false;
    isPlaying = false;

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
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

    getVideoId = (url: string) => {
        const regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[7].length == 11 ? match[7] : '';
    };

    playerReady = (event: YT.PlayerEvent) => {
        this.player = event.target;

        if (this.isInitialLoad) {
            const storedBgmSets = localStorage.getItem(this.storageKey);
            if (storedBgmSets && storedBgmSets.length > 2) {
                this.import(JSON.parse(storedBgmSets));
            }

            this.isInitialLoad = false;
            this.loading = false;
            this.playbackEvent(BgmPlaybackEvent.Pause);
        }
    };

    togglePlayback = (togglePlaybackEvent: BgmTogglePlaybackEvent) => {
        togglePlaybackEvent.event.stopPropagation();

        const isPlaying = this.player.getPlayerState() === 1;
        const isToggleOnly = this.bgm === togglePlaybackEvent.bgm;
        if (!isToggleOnly) {
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
        const name = `Sound Group ${this.bgmSets.length + 1}`;
        this.bgmSets.push({ name, items: [] } as BgmSet);
        if (Array.isArray(this.accordionGroup.value)) {
            this.accordionGroup.value.push(name);
        } else {
            this.accordionGroup.value = name;
        }
    };

    deleteBgmSet = (bgmSetIndex: number) => {
        this.bgmSets.splice(bgmSetIndex, 1);
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
                this.bgmSets.map((bgmSet) => ({
                    name: bgmSet.name,
                    items: bgmSet.items.map((bgm) => ({
                        name: bgm.name,
                        link: bgm.link,
                    })),
                })),
            ),
        );

    import = (bgmSets: BgmSet[]) => {
        this.bgmSets = bgmSets;
        this.setBgm(this.bgmSets[0].items[0]);
    };

    handleReorderEnd(event: ReorderEndCustomEvent) {
        if (event.detail.from === event.detail.to) {
            return;
        }

        const movedBgmSet = this.bgmSets.splice(event.detail.from, 1)[0];
        this.bgmSets.splice(event.detail.to, 0, movedBgmSet);
        this.save();

        event.detail.complete();
    }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

import { Bgm, BgmPlaybackEvent } from '../bgm.type';
import { playerUpdateInterval } from '../bgm.config';

@Component({
    selector: 'app-bgm-player',
    templateUrl: './bgm-player.component.html',
    styleUrls: ['./bgm-player.component.scss'],
})
export class BgmPlayerComponent implements OnInit {
    @Input() bgm!: Bgm;
    @Input() player!: YT.Player;
    @Input() loading = true;
    @Input() isPlaying = false;
    @Output() playbackEvent = new EventEmitter<BgmPlaybackEvent>();
    @Output() volumeEvent = new EventEmitter<number>();

    playbackTime = 0;
    bufferedTime = 0;

    bgmPlaybackEvent = BgmPlaybackEvent;

    ngOnInit() {
        setInterval(this.updatePlayerTime, playerUpdateInterval);
    }

    playback = (bgmPlaybackEvent: BgmPlaybackEvent) =>
        this.playbackEvent.emit(bgmPlaybackEvent);

    setVolume = (rangeCustomEvent: RangeCustomEvent) =>
        this.volumeEvent.emit(Number(rangeCustomEvent.detail.value));

    seekVideo(event: MouseEvent) {
        const progress =
            event.offsetX / (event.target as HTMLElement).clientWidth;
        const time = progress * this.player.getDuration();
        this.player.seekTo(time, true);
    }

    updatePlayerTime = () => {
        if (this.player) {
            this.playbackTime =
                this.player.getCurrentTime() / this.player.getDuration();
            this.bufferedTime = this.player.getVideoLoadedFraction();
        }
    };
}

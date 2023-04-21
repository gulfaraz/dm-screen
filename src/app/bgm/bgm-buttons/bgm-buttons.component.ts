import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Bgm, BgmSet, BgmTogglePlaybackEvent } from '../bgm.type';
import { colours } from '../bgm.config';

@Component({
    selector: 'app-bgm-buttons',
    templateUrl: './bgm-buttons.component.html',
    styleUrls: ['./bgm-buttons.component.scss'],
})
export class BgmButtonsComponent {
    @Input() bgmSet!: BgmSet;
    @Input() disabled = true;
    @Output() togglePlaybackEvent = new EventEmitter<BgmTogglePlaybackEvent>();

    colours = colours;

    isValidUrl = (url: string) =>
        /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url);

    togglePlayback = (event: Event, bgm: Bgm) => {
        bgm.loading = true;
        this.togglePlaybackEvent.emit({ event, bgm });
    };
}

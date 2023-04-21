import { Component, Input } from '@angular/core';

import { download } from 'src/app/shared/json-exporter/utils';
import { exportLabel } from '../bgm.config';

@Component({
    selector: 'app-bgm-set-exporter',
    templateUrl: './bgm-set-exporter.component.html',
})
export class BgmSetExporterComponent {
    @Input() storageKey!: string;

    export = () =>
        download(
            localStorage.getItem(this.storageKey) || '[]',
            'application/json',
            exportLabel,
        );
}

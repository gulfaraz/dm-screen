import { Component, Input } from '@angular/core';

import { download } from 'src/app/shared/json-exporter/utils';
import { exportLabel } from '../bgm.config';
import { IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { downloadOutline } from 'ionicons/icons';

addIcons({
    downloadOutline,
});

@Component({
    selector: 'app-bgm-set-exporter',
    templateUrl: './bgm-set-exporter.component.html',
    imports: [IonItem, IonIcon, IonLabel],
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

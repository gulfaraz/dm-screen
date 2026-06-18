import { Component, Input } from '@angular/core';
import {
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { downloadOutline } from 'ionicons/icons';

import { download } from './utils';

addIcons({ downloadOutline });

@Component({
    selector: 'app-json-exporter',
    templateUrl: './json-exporter.component.html',
    imports: [IonButton, IonIcon, IonLabel, IonItem],
})
export class JsonExporterComponent {
    @Input() label = 'Export JSON';
    @Input() json = {};
    @Input() variant: 'button' | 'item' = 'button';

    export = () =>
        download(JSON.stringify(this.json), 'application/json', this.label);
}

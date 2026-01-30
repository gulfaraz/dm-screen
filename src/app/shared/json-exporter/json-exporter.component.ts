import { Component, Input } from '@angular/core';

import { download } from './utils';
import { IonButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { downloadOutline } from 'ionicons/icons';

addIcons({
    downloadOutline,
});

@Component({
    selector: 'app-json-exporter',
    templateUrl: './json-exporter.component.html',
    imports: [IonButton, IonIcon, IonLabel],
})
export class JsonExporterComponent {
    @Input() label = 'Export JSON';
    @Input() json = {};

    export = () =>
        download(JSON.stringify(this.json), 'application/json', this.label);
}

import { Component } from '@angular/core';

import { BgmSet } from '../bgm.type';
import { JsonImporterComponent } from 'src/app/shared/json-importer/json-importer.component';
import { IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { pushOutline } from 'ionicons/icons';

addIcons({
    pushOutline,
});

@Component({
    selector: 'app-bgm-set-importer',
    templateUrl: './bgm-set-importer.component.html',
    imports: [IonItem, IonIcon, IonLabel],
})
export class BgmSetImporterComponent extends JsonImporterComponent<BgmSet[]> {}

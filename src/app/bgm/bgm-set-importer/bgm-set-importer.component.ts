import { Component } from '@angular/core';

import { BgmSet } from '../bgm.type';
import { JsonImporterComponent } from 'src/app/shared/json-importer/json-importer.component';

@Component({
    selector: 'app-bgm-set-importer',
    templateUrl: './bgm-set-importer.component.html',
})
export class BgmSetImporterComponent extends JsonImporterComponent<BgmSet[]> {}

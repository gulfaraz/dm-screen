import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { SharedModule } from '../shared/shared.module';
import { BgmComponent } from './bgm.component';
import { BgmEditorComponent } from './bgm-editor/bgm-editor.component';
import { BgmPlayerComponent } from './bgm-player/bgm-player.component';
import { BgmButtonsComponent } from './bgm-buttons/bgm-buttons.component';
import { BgmSetImporterComponent } from './bgm-set-importer/bgm-set-importer.component';
import { BgmSetExporterComponent } from './bgm-set-exporter/bgm-set-exporter.component';
import { BgmGuideComponent } from './bgm-guide/bgm-guide.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: BgmComponent }]),
        FormsModule,
        IonicModule,
        SharedModule,
        YouTubePlayerModule,
    ],
    declarations: [
        BgmComponent,
        BgmEditorComponent,
        BgmPlayerComponent,
        BgmButtonsComponent,
        BgmSetImporterComponent,
        BgmSetExporterComponent,
        BgmGuideComponent,
    ],
    exports: [
        BgmComponent,
        BgmEditorComponent,
        BgmPlayerComponent,
        BgmButtonsComponent,
        BgmSetImporterComponent,
        BgmSetExporterComponent,
        BgmGuideComponent,
    ],
})
export class BgmModule {}

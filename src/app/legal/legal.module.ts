import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { LegalComponent } from './legal.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: LegalComponent }]),
        IonicModule,
        SharedModule,
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
    ],
    declarations: [LegalComponent],
    exports: [LegalComponent],
})
export class LegalModule {}

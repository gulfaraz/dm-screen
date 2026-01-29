import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
    HttpClient,
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { LegalComponent } from './legal.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [LegalComponent],
    exports: [LegalComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: LegalComponent }]),
        IonicModule,
        SharedModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class LegalModule {}

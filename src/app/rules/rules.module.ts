import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { RulesComponent } from './rules.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: RulesComponent }]),
        FormsModule,
        IonicModule,
        SharedModule,
    ],
    declarations: [RulesComponent],
    exports: [RulesComponent],
})
export class RulesModule {}

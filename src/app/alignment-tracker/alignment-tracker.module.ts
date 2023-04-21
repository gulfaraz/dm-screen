import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { AlignmentTrackerComponent } from './alignment-tracker.component';
import { AlignmentTrackerControlsComponent } from './alignment-tracker-controls/alignment-tracker-controls.component';
import { AlignmentTrackerChartComponent } from './alignment-tracker-chart/alignment-tracker-chart.component';
import { AlignmentTrackerTableComponent } from './alignment-tracker-table/alignment-tracker-table.component';
import { UniqueCharacterNameDirective } from './alignment-tracker-table/unique-character-name.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: AlignmentTrackerComponent },
        ]),
        FormsModule,
        IonicModule,
        SharedModule,
    ],
    declarations: [
        AlignmentTrackerComponent,
        AlignmentTrackerControlsComponent,
        AlignmentTrackerChartComponent,
        AlignmentTrackerTableComponent,
        UniqueCharacterNameDirective,
    ],
    exports: [
        AlignmentTrackerComponent,
        AlignmentTrackerControlsComponent,
        AlignmentTrackerChartComponent,
        AlignmentTrackerTableComponent,
        UniqueCharacterNameDirective,
    ],
})
export class AlignmentTrackerModule {}

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../alignment-tracker.character';
import { JsonImporterComponent } from '../../shared/json-importer/json-importer.component';
import { JsonExporterComponent } from '../../shared/json-exporter/json-exporter.component';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
    selector: 'app-alignment-tracker-controls',
    templateUrl: './alignment-tracker-controls.component.html',
    imports: [
        IonHeader,
        IonToolbar,
        JsonImporterComponent,
        JsonExporterComponent,
    ],
})
export class AlignmentTrackerControlsComponent {
    @Input() characters!: Character[];
    @Output() importCharactersEvent = new EventEmitter<Character[]>();

    import = (characters: Character[]) =>
        this.importCharactersEvent.emit(characters);
}

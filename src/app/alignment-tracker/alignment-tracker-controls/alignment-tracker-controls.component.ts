import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';

import { JsonExporterComponent } from '../../shared/json-exporter/json-exporter.component';
import { JsonImporterComponent } from '../../shared/json-importer/json-importer.component';
import { Character } from '../alignment-tracker.character';

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

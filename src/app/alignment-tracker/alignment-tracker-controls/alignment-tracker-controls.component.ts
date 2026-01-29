import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../alignment-tracker.character';

@Component({
    selector: 'app-alignment-tracker-controls',
    templateUrl: './alignment-tracker-controls.component.html',
    standalone: false,
})
export class AlignmentTrackerControlsComponent {
    @Input() characters!: Character[];
    @Output() importCharactersEvent = new EventEmitter<Character[]>();

    import = (characters: Character[]) =>
        this.importCharactersEvent.emit(characters);
}

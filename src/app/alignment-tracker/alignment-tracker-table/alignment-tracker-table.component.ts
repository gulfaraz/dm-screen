import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {
    InputCustomEvent,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonInput,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonList,
} from '@ionic/angular/standalone';
import { NgForm, FormsModule } from '@angular/forms';

import {
    Character,
    SetCharacterNameEvent,
} from '../alignment-tracker.character';
import sharedConfig from '../../shared/config';
import { UniqueCharacterNameDirective } from './unique-character-name.directive';

@Component({
    selector: 'app-alignment-tracker-table',
    templateUrl: './alignment-tracker-table.component.html',
    imports: [
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonList,
        IonItemSliding,
        IonItem,
        IonInput,
        IonButton,
        IonItemOptions,
        IonItemOption,
        FormsModule,
        UniqueCharacterNameDirective,
    ],
})
export class AlignmentTrackerTableComponent {
    @Input() characters!: Character[];
    @Output() saveCharacterEvent = new EventEmitter<Character>();
    @Output() deleteCharacterEvent = new EventEmitter<Character>();
    @Output() setCharacterNameEvent = new EventEmitter<SetCharacterNameEvent>();
    @Output() fillCharacterEvent = new EventEmitter<Character | null>();
    @ViewChild('addCharacterForm') addCharacterForm!: NgForm;

    debounceTime = sharedConfig.debounceTime;
    characterName = '';

    onChange = (character: Character, inputCustomEvent: InputCustomEvent) => {
        if (inputCustomEvent.detail.value) {
            const matches = this.characters.filter(
                (character) => character.name === inputCustomEvent.detail.value,
            );
            if (matches.length < 2) {
                this.setCharacterNameEvent.emit({
                    character,
                    name: inputCustomEvent.detail.value || character.name,
                });
            }
        }
    };

    addCharacter = () => {
        if (this.characterName && this.addCharacterForm.valid) {
            this.saveCharacterEvent.emit(new Character(this.characterName));
            this.addCharacterForm.reset();
        }
    };

    deleteCharacter = (character: Character) =>
        this.deleteCharacterEvent.emit(character);

    fillCharacter = (character: Character | null) =>
        this.fillCharacterEvent.emit(character);
}

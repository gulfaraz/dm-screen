import { Component } from '@angular/core';
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/angular/standalone';

import { FooterComponent } from '../shared/footer/footer.component';
import { GuideComponent } from '../shared/guide/guide.component';
import {
    Character,
    characters,
    SetCharacterAlignmentEvent,
    SetCharacterNameEvent,
} from './alignment-tracker.character';
import { name } from './alignment-tracker.config';
import { AlignmentTrackerChartComponent } from './alignment-tracker-chart/alignment-tracker-chart.component';
import { AlignmentTrackerControlsComponent } from './alignment-tracker-controls/alignment-tracker-controls.component';
import { AlignmentTrackerTableComponent } from './alignment-tracker-table/alignment-tracker-table.component';

@Component({
    selector: 'app-alignment-tracker',
    templateUrl: './alignment-tracker.component.html',
    imports: [
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        AlignmentTrackerControlsComponent,
        AlignmentTrackerChartComponent,
        AlignmentTrackerTableComponent,
        GuideComponent,
        FooterComponent,
    ],
})
export class AlignmentTrackerComponent {
    name = name;

    characters: Character[] = characters;
    character: Character | null = null;
    storageKey = 'alignment-tracker';

    constructor() {
        const storedCharacters = localStorage.getItem(this.storageKey);
        if (storedCharacters && storedCharacters.length > 2) {
            this.characters = this.import(JSON.parse(storedCharacters));
            this.save();
        }
    }

    import = (characters: Character[]) =>
        characters.map(
            (character: Character) =>
                new Character(
                    character.name,
                    character.ethical,
                    character.moral,
                    character.colour,
                ),
        );

    save = () =>
        localStorage.setItem(this.storageKey, JSON.stringify(this.characters));

    saveCharacter = (character: Character) =>
        this.setCharacters([...this.characters, character]);

    deleteCharacter = (character: Character) =>
        this.setCharacters(
            this.characters.filter((_character) => _character !== character),
        );

    setCharacters = (characters: Character[]) => {
        this.characters = [...characters];
        this.save();
    };

    setCharacterName = (setCharacterNameEvent: SetCharacterNameEvent) => {
        const characterIndex = this.characters.findIndex(
            (character) =>
                character.name === setCharacterNameEvent.character.name,
        );
        this.characters[characterIndex].name = setCharacterNameEvent.name;
        this.setCharacters(this.characters);
    };

    setCharacterAlignment = (
        setCharacterAlignmentEvent: SetCharacterAlignmentEvent,
    ) => {
        const characterIndex = this.characters.findIndex(
            (character) =>
                character.name === setCharacterAlignmentEvent.character.name,
        );
        this.characters[characterIndex].ethical =
            setCharacterAlignmentEvent.ethical;
        this.characters[characterIndex].moral =
            setCharacterAlignmentEvent.moral;
        this.setCharacters(this.characters);
    };

    fillCharacter = (character: Character | null) =>
        (this.character = character);
}

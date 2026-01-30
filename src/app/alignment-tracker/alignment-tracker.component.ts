import { Component } from '@angular/core';

import {
    Character,
    characters,
    SetCharacterNameEvent,
    SetCharacterAlignmentEvent,
} from './alignment-tracker.character';
import { AlignmentTrackerGuideComponent } from './alignment-tracker-guide/alignment-tracker-guide.component';
import { AlignmentTrackerControlsComponent } from './alignment-tracker-controls/alignment-tracker-controls.component';
import { AlignmentTrackerChartComponent } from './alignment-tracker-chart/alignment-tracker-chart.component';
import { AlignmentTrackerTableComponent } from './alignment-tracker-table/alignment-tracker-table.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
    selector: 'app-alignment-tracker',
    templateUrl: './alignment-tracker.component.html',
    imports: [
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        AlignmentTrackerGuideComponent,
        AlignmentTrackerControlsComponent,
        AlignmentTrackerChartComponent,
        AlignmentTrackerTableComponent,
        FooterComponent,
    ],
})
export class AlignmentTrackerComponent {
    characters: Character[] = characters;
    character: Character | null = null;
    storageKey = 'alignment-tracker';

    constructor() {
        const storedCharacters = localStorage.getItem(this.storageKey);
        if (storedCharacters && storedCharacters.length > 2)
            this.characters = this.import(JSON.parse(storedCharacters));
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

    saveCharacter = (character: Character) =>
        this.setCharacters([...this.characters, character]);

    deleteCharacter = (character: Character) =>
        this.setCharacters(
            this.characters.filter((_character) => _character !== character),
        );

    setCharacters = (characters: Character[]) => {
        localStorage.setItem(this.storageKey, JSON.stringify(characters));
        this.characters = [...characters];
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

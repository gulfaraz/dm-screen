import { Directive, Input } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';

import { Character } from '../alignment-tracker.character';

@Directive({
    selector: '[appUniqueCharacterName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: UniqueCharacterNameDirective,
            multi: true,
        },
    ],
})
export class UniqueCharacterNameDirective implements Validator {
    @Input('appUniqueCharacterName') characters: Character[] = [];

    validate = (control: AbstractControl): ValidationErrors | null =>
        this.characters.findIndex(
            (character) => character.name === control.value,
        ) < 0
            ? null
            : { uniqueCharacterName: { value: control.value } };
}

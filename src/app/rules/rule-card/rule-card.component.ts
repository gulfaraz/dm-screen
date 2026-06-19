import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowDown, arrowUp } from 'ionicons/icons';
import { MarkdownComponent } from 'ngx-markdown';

import { MoveDirection, Rule } from '../rules.type';

addIcons({ arrowUp, arrowDown });

@Component({
    selector: 'app-rule-card',
    templateUrl: './rule-card.component.html',
    styleUrl: './rule-card.component.scss',
    imports: [
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonButtons,
        IonButton,
        IonIcon,
        MarkdownComponent,
    ],
})
export class RuleCardComponent {
    @Input() rule!: Rule;
    @Input() disableMove = false;
    @Input() isFirst = false;
    @Input() isLast = false;

    @Output() moveRule = new EventEmitter<MoveDirection>();
    @Output() openRule = new EventEmitter<void>();

    move = (event: Event, direction: MoveDirection) => {
        event.stopPropagation();

        this.moveRule.emit(direction);
    };
}

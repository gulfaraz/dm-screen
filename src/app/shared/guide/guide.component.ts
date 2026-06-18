import { Component, Input } from '@angular/core';
import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonModal,
    IonRow,
    IonTitle,
    IonToolbar,
} from '@ionic/angular/standalone';
import { MarkdownComponent } from 'ngx-markdown';

import { injectCurrentRoute } from '../route-tracker';
import { generateId } from '../utils';

@Component({
    selector: 'app-guide',
    templateUrl: './guide.component.html',
    imports: [
        IonRow,
        IonCol,
        IonButton,
        IonModal,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonContent,
        MarkdownComponent,
    ],
})
export class GuideComponent {
    @Input() name!: string;

    route = injectCurrentRoute();
    id = `guide-${generateId()}`;

    get title() {
        return `How to use ${this.name}?`;
    }
}

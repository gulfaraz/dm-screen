import { Component } from '@angular/core';
import {
    IonButton,
    IonButtons,
    IonFooter,
    IonToolbar,
} from '@ionic/angular/standalone';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    imports: [IonFooter, IonToolbar, IonButtons, IonButton],
})
export class FooterComponent {
    year = new Date().getFullYear();
}

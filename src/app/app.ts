import { Component } from '@angular/core';
import {
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonText,
} from '@ionic/angular/standalone';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [IonTabs, IonTabBar, IonTabButton, IonLabel, IonText],
})
export class App {
    paymentLink = 'https://buy.stripe.com/aEU6oocL16GtfC0eUV';
}

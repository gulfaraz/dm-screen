import { Component } from '@angular/core';
import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonRow,
    IonTitle,
    IonToolbar,
} from '@ionic/angular/standalone';

@Component({
    selector: 'app-bgm-guide',
    templateUrl: './bgm-guide.component.html',
    imports: [
        IonRow,
        IonCol,
        IonButton,
        IonModal,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonList,
        IonItem,
        IonLabel,
    ],
})
export class BgmGuideComponent {}

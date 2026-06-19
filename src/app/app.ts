import { Component } from '@angular/core';
import {
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonText,
} from '@ionic/angular/standalone';

import { name as alignmentTrackerName } from './alignment-tracker/alignment-tracker.config';
import { name as bgmName } from './bgm/bgm.config';
import { name as rulesName } from './rules/rules.config';
import { name as scenesName } from './scenes/scenes.config';

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
    imports: [IonTabs, IonTabBar, IonTabButton, IonLabel, IonText],
})
export class App {
    paymentLink = 'https://buy.stripe.com/aEU6oocL16GtfC0eUV';

    name = {
        bgm: bgmName,
        'alignment-tracker': alignmentTrackerName,
        scenes: scenesName,
        rules: rulesName,
    };
}

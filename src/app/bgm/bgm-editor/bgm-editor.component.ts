import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    AlertController,
    IonButton,
    IonCol,
    IonGrid,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, closeCircleOutline, trashOutline } from 'ionicons/icons';
import sharedConfig from 'src/app/shared/config';

import bgmConfig from '../bgm.config';
import { Bgm, BgmSet } from '../bgm.type';

addIcons({ closeCircleOutline, add, trashOutline });

@Component({
    selector: 'app-bgm-editor',
    templateUrl: './bgm-editor.component.html',
    imports: [
        IonGrid,
        IonRow,
        IonCol,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonIcon,
        FormsModule,
    ],
    providers: [AlertController],
})
export class BgmEditorComponent {
    private alertController = inject(AlertController);

    @Input() bgmSet!: BgmSet;
    @Output() deleteBgmSetEvent = new EventEmitter<BgmSet['id']>();
    @Output() changeEvent = new EventEmitter();

    debounceTime = sharedConfig.debounceTime;
    bgmPerSet = bgmConfig.bgmPerSet;
    colours = bgmConfig.colours;
    defaultBgm = bgmConfig.defaultBgm;

    addBgm = () => {
        this.bgmSet.items.push({} as Bgm);
        this.change();
    };

    removeBgm = (index: number) => {
        this.bgmSet.items = this.bgmSet.items.filter(
            (_, _index) => _index !== index,
        );
        this.change();
    };

    deleteBgmSet = async () => {
        const alert = await this.alertController.create({
            header: 'Delete Sound Group',
            subHeader: 'This action cannot be undone.',
            message: `Are you sure you want to delete Sound Group: ${this.bgmSet.name}?`,
            buttons: [
                { text: 'Cancel', role: 'cancel' },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => this.deleteBgmSetEvent.emit(this.bgmSet.id),
                },
            ],
        });

        await alert.present();
    };

    change = () => this.changeEvent.emit();
}

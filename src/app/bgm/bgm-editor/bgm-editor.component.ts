import { Component, EventEmitter, Input, Output } from '@angular/core';

import sharedConfig from 'src/app/shared/config';
import bgmConfig from '../bgm.config';

import { Bgm, BgmSet } from '../bgm.type';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-bgm-editor',
    templateUrl: './bgm-editor.component.html',
    standalone: false,
})
export class BgmEditorComponent {
    @Input() bgmSet!: BgmSet;
    @Input() bgmSetIndex!: number;
    @Output() deleteBgmSetEvent = new EventEmitter<number>();
    @Output() changeEvent = new EventEmitter();

    debounceTime = sharedConfig.debounceTime;
    bgmPerSet = bgmConfig.bgmPerSet;
    colours = bgmConfig.colours;

    constructor(private alertController: AlertController) {}

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
            message: `Are you sure you want to delete<br />Sound Group <b>${this.bgmSet.name}</b>?`,
            buttons: [
                { text: 'Cancel', role: 'cancel' },
                {
                    text: 'Delete',
                    role: 'confirm',
                    handler: () =>
                        this.deleteBgmSetEvent.emit(this.bgmSetIndex),
                },
            ],
        });

        await alert.present();
    };

    change = () => this.changeEvent.emit();
}

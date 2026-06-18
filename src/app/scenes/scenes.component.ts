import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    AccordionGroupCustomEvent,
    AlertController,
    InputCustomEvent,
    IonAccordion,
    IonAccordionGroup,
    IonCol,
    IonContent,
    IonDatetime,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPopover,
    IonReorder,
    IonReorderGroup,
    IonRow,
    IonTextarea,
    ReorderEndCustomEvent,
} from '@ionic/angular/standalone';
import { format, isSaturday, nextSaturday } from 'date-fns';
import Fuse from 'fuse.js';
import { addIcons } from 'ionicons';
import {
    add,
    createOutline,
    saveOutline,
    searchOutline,
    trashOutline,
} from 'ionicons/icons';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

import { EditableComponent } from '../shared/editable/editable.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { GuideComponent } from '../shared/guide/guide.component';
import { JsonExporterComponent } from '../shared/json-exporter/json-exporter.component';
import { JsonImporterComponent } from '../shared/json-importer/json-importer.component';
import {
    defaultScene,
    exportLabel,
    fuseOptions,
    importLabel,
    name,
} from './scenes.config';
import scenesSeed from './scenes.seed.json';
import { Scene } from './scenes.type';

addIcons({ add, createOutline, saveOutline, searchOutline, trashOutline });

@Component({
    selector: 'app-scenes',
    templateUrl: './scenes.component.html',
    providers: [provideMarkdown(), AlertController],
    imports: [
        IonContent,
        IonList,
        IonRow,
        IonCol,
        IonAccordionGroup,
        IonAccordion,
        IonItem,
        IonInput,
        IonIcon,
        IonLabel,
        IonPopover,
        IonDatetime,
        IonReorderGroup,
        IonReorder,
        IonTextarea,
        DatePipe,
        GuideComponent,
        MarkdownComponent,
        EditableComponent,
        JsonImporterComponent,
        JsonExporterComponent,
        FooterComponent,
        FormsModule,
    ],
})
export class ScenesComponent {
    private alertController = inject(AlertController);

    name = name;

    scenes: Scene[] = [];
    storageKey = 'scenes';
    searchTerm = '';
    importLabel = importLabel;
    exportLabel = exportLabel;

    openScenes: Record<Scene['id'], Scene> = {};

    constructor() {
        try {
            const storedScenes = localStorage.getItem(this.storageKey);
            if (storedScenes && storedScenes.length > 2) {
                this.import(JSON.parse(storedScenes));
            } else {
                this.import(Array.from(scenesSeed));
            }
        } catch {
            this.import(Array.from(scenesSeed));
        }
    }

    addScene = () => {
        const scene = {
            ...defaultScene,
            id: crypto.randomUUID(),
            date: this.getNearestSaturday(),
            updated: new Date().toISOString(),
        };
        this.scenes = [scene, ...this.scenes];
        this.openScenes[scene.id] = { ...scene };
    };

    isDefaultScene = ({ title, description, notes }: Scene) =>
        title === defaultScene.title &&
        description === defaultScene.description &&
        notes === defaultScene.notes;

    get openSceneIds() {
        return Object.keys(this.openScenes);
    }

    get searching() {
        return (
            this.searchTerm.trim().length >=
            (fuseOptions.minMatchCharLength ?? 1)
        );
    }

    get visibleScenes(): Scene[] {
        if (!this.searching) {
            return this.scenes;
        }

        return new Fuse(this.scenes, fuseOptions)
            .search(this.searchTerm.trim())
            .map(({ item }) => item);
    }

    onSearch = (event: InputCustomEvent) => {
        this.searchTerm = (event.detail.value ?? '').toString();
    };

    onToggleScene = (event: AccordionGroupCustomEvent<Scene['id'][]>) => {
        if (event.target !== event.currentTarget) {
            return;
        }

        const sceneIds = new Set(event.detail.value ?? []);

        // clear closed scenes
        for (const [openSceneId, openScene] of Object.entries(
            this.openScenes,
        )) {
            if (sceneIds.has(openSceneId)) continue;

            const sceneIndex = this.scenes.findIndex(
                ({ id }) => id === openSceneId,
            );
            const scene =
                sceneIndex === -1 ? undefined : this.scenes[sceneIndex];

            if (scene) {
                // discard unsaved changes
                if (JSON.stringify(scene) !== JSON.stringify(openScene)) {
                    this.scenes = this.scenes.with(sceneIndex, {
                        ...openScene,
                    });
                }

                // delete default scene
                if (this.isDefaultScene(scene)) {
                    this.deleteScene(scene);
                }
            }

            delete this.openScenes[openSceneId];
        }

        // open new scenes
        for (const sceneId of sceneIds) {
            if (this.openScenes[sceneId]) continue;

            const scene = this.scenes.find(({ id }) => id === sceneId);
            if (!scene) continue;

            this.openScenes[scene.id] = { ...scene };
        }
    };

    isOpen = (sceneId: Scene['id']) => sceneId in this.openScenes;

    onSave = (scene: Scene) => {
        const sceneIndex = this.scenes.findIndex(({ id }) => id === scene.id);

        if (sceneIndex < 0) return;

        this.scenes = this.scenes.with(sceneIndex, scene);
        this.openScenes[scene.id] = { ...scene };

        this.save();
    };

    onDelete = async (scene: Scene) => {
        if (this.isDefaultScene(scene)) {
            return this.deleteScene(scene);
        }

        const alert = await this.alertController.create({
            header: 'Delete Scene',
            subHeader: 'This action cannot be undone.',
            message: `Are you sure you want to delete the scene: ${scene.title || 'Untitled Scene'}?`,
            buttons: [
                { text: 'Cancel', role: 'cancel' },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => this.deleteScene(scene),
                },
            ],
        });

        await alert.present();
    };

    deleteScene = (scene: Scene) => {
        this.scenes = this.scenes.filter(({ id }) => id !== scene.id);
        delete this.openScenes[scene.id];

        this.save();
    };

    save = () =>
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(
                this.scenes.filter((scene) => !this.isDefaultScene(scene)),
            ),
        );

    import = (scenes: Scene[]) => {
        this.scenes = scenes;
        this.save();

        if (scenes.length <= 0) return;

        this.openScenes[scenes[0].id] = { ...scenes[0] };
    };

    onReorderEnd = (event: ReorderEndCustomEvent) => {
        const { from, to, complete } = event.detail;

        if (from === to) return complete(false);

        const movedScene = this.scenes.splice(from, 1)[0];
        this.scenes.splice(to, 0, movedScene);
        this.save();

        complete(false);
    };

    private getNearestSaturday = (): string => {
        const today = new Date();
        const nearestSaturday = isSaturday(today) ? today : nextSaturday(today);

        return format(nearestSaturday, 'yyyy-MM-dd');
    };
}

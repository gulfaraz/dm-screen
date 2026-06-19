import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
    AccordionGroupCustomEvent,
    AlertController,
    InputCustomEvent,
    IonAccordion,
    IonAccordionGroup,
    IonButton,
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
import { routeHook } from '../shared/route-hook';
import {
    defaultScene,
    exportLabel,
    fuseOptions,
    importLabel,
    name,
    queryParamKey,
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
        IonButton,
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
export class ScenesComponent implements OnInit {
    private alertController = inject(AlertController);
    private router = inject(Router);

    name = name;

    scenes: Scene[] = [];
    storageKey = 'scenes';
    searchTerm = '';
    importLabel = importLabel;
    exportLabel = exportLabel;
    hasInitialized = false;

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

        routeHook('/scenes', () => this.initRoute());
    }

    ngOnInit() {
        this.initRoute();
    }

    initRoute = () => {
        this.openScenes = {};

        for (const sceneId of this.sceneIds) {
            const scene = this.scenes.find(({ id }) => id === sceneId);
            if (!scene) continue;

            this.openScenes[scene.id] = { ...scene };
        }

        if (this.openSceneIds.length > 0) return;

        if (this.hasInitialized) return;

        this.openScenes[this.scenes[0].id] = { ...this.scenes[0] };
        this.setRoute();
        this.hasInitialized = true;
    };

    get sceneIds() {
        const sceneIdsString = this.router
            .parseUrl(this.router.url)
            .queryParamMap.get(queryParamKey);
        if (!sceneIdsString) return [];

        return sceneIdsString
            .split(',')
            .map((sceneId) => sceneId.trim())
            .filter(Boolean);
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
        this.setRoute();
    };

    isDefaultScene = (scene: Scene) =>
        this.isIdenticalScene(defaultScene, scene);

    isIdenticalScene = (
        { title, description, notes }: Partial<Scene>,
        scene: Scene,
    ) =>
        title === scene.title &&
        description === scene.description &&
        notes === scene.notes;

    get openSceneIds() {
        return Object.keys(this.openScenes);
    }

    setRoute = () => {
        const queryParams: Record<string, string> = {};
        if (this.openSceneIds.length > 0) {
            queryParams[queryParamKey] = this.openSceneIds.join(',');
        }

        this.router.navigate([], { queryParams, replaceUrl: true });
    };

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

    onToggleScene = async (event: AccordionGroupCustomEvent<Scene['id'][]>) => {
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
                // save or discard unsaved changes
                if (!this.isIdenticalScene(scene, openScene)) {
                    const { role } = await this.confirmCollapse(scene);

                    if (role === 'save') this.onSave(scene);
                    else if (role === 'destructive') {
                        this.scenes = this.scenes.with(sceneIndex, {
                            ...openScene,
                        });
                    } else continue;
                }

                // delete default scene
                const closedScene = this.scenes.find(
                    ({ id }) => id === openSceneId,
                );
                if (closedScene && this.isDefaultScene(closedScene)) {
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

        this.setRoute();
    };

    private confirmCollapse = async (scene: Scene) => {
        const alert = await this.alertController.create({
            header: 'Save Scene?',
            message: `You have unsaved changes to the scene: ${scene.title || 'Untitled Scene'}.`,
            buttons: [
                { text: 'Discard', role: 'destructive' },
                { text: 'Cancel', role: 'cancel' },
                { text: 'Save', role: 'save' },
            ],
        });

        await alert.present();

        return alert.onDidDismiss();
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
        this.setRoute();
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

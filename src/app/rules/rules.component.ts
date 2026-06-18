import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    AlertController,
    InputCustomEvent,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonRow,
    IonTextarea,
    IonTitle,
    IonToolbar,
} from '@ionic/angular/standalone';
import Fuse from 'fuse.js';
import { addIcons } from 'ionicons';
import { add, searchOutline } from 'ionicons/icons';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

import { EditableComponent } from '../shared/editable/editable.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { GuideComponent } from '../shared/guide/guide.component';
import { JsonExporterComponent } from '../shared/json-exporter/json-exporter.component';
import { JsonImporterComponent } from '../shared/json-importer/json-importer.component';
import { RuleCardComponent } from './rule-card/rule-card.component';
import {
    defaultRule,
    exportLabel,
    fuseOptions,
    importLabel,
    name,
} from './rules.config';
import rulesSeed from './rules.seed.json';
import { MoveDirection, Rule } from './rules.type';

addIcons({ add, searchOutline });

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.scss',
    providers: [provideMarkdown(), AlertController],
    imports: [
        IonContent,
        IonItem,
        IonInput,
        IonIcon,
        IonGrid,
        IonRow,
        IonCol,
        IonButton,
        IonButtons,
        IonLabel,
        IonModal,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonTextarea,
        MarkdownComponent,
        EditableComponent,
        GuideComponent,
        RuleCardComponent,
        JsonImporterComponent,
        JsonExporterComponent,
        FooterComponent,
        FormsModule,
    ],
})
export class RulesComponent {
    private alertController = inject(AlertController);

    name = name;

    rules: Rule[] = [];
    rule: Rule | null = null;
    storageKey = 'rules';
    importLabel = importLabel;
    exportLabel = exportLabel;
    searchTerm = '';

    constructor() {
        try {
            const storedRules = localStorage.getItem(this.storageKey);
            if (storedRules && storedRules.length > 2) {
                this.import(JSON.parse(storedRules));
            } else {
                this.import(Array.from(rulesSeed));
            }
        } catch {
            this.import(Array.from(rulesSeed));
        }
    }

    addRule = () => {
        const rule: Rule = {
            ...defaultRule,
            id: crypto.randomUUID(),
            updated: new Date().toISOString(),
        };

        this.rules = [...this.rules, rule];
        this.onOpen(rule);
    };

    isDefaultRule = ({ title, summary, details }: Rule) =>
        title === defaultRule.title &&
        summary === defaultRule.summary &&
        details === defaultRule.details;

    get searching() {
        return (
            this.searchTerm.trim().length >=
            (fuseOptions.minMatchCharLength ?? 1)
        );
    }

    get visibleRules(): Rule[] {
        if (!this.searching) {
            return this.rules;
        }

        return new Fuse(this.rules, fuseOptions)
            .search(this.searchTerm.trim())
            .map(({ item }) => item);
    }

    onSearch = (event: InputCustomEvent) => {
        this.searchTerm = (event.detail.value ?? '').toString();
    };

    onOpen = (rule: Rule) => {
        this.rule = { ...rule };
    };

    onDismiss = () => {
        const rule = this.rules.find(({ id }) => id === this.rule?.id);
        if (rule && this.isDefaultRule(rule)) {
            return this.deleteRule(rule);
        }

        this.rule = null;
    };

    onSave = (rule: Rule) => {
        const ruleIndex = this.rules.findIndex(({ id }) => id === rule.id);

        if (ruleIndex < 0) return;

        this.rules = this.rules.with(ruleIndex, rule);

        this.save();
    };

    onDelete = async (rule: Rule) => {
        if (this.isDefaultRule(rule)) {
            return this.deleteRule(rule);
        }

        const alert = await this.alertController.create({
            header: 'Delete Rule',
            subHeader: 'This action cannot be undone.',
            message: `Are you sure you want to delete the rule: ${rule.title || 'Untitled Rule'}?`,
            buttons: [
                { text: 'Cancel', role: 'cancel' },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => this.deleteRule(rule),
                },
            ],
        });

        await alert.present();
    };

    deleteRule = (rule: Rule) => {
        this.import(this.rules.filter(({ id }) => id !== rule.id));
        this.save();
    };

    save = () =>
        localStorage.setItem(this.storageKey, JSON.stringify(this.rules));

    import = (rules: Rule[]) => {
        this.rules = rules;
        this.rule = null;
    };

    onMove(direction: MoveDirection, ruleIndex: number) {
        const targetIndex = direction === 'up' ? ruleIndex - 1 : ruleIndex + 1;

        if (targetIndex < 0 || targetIndex >= this.rules.length) return;

        const movedRule = this.rules.splice(ruleIndex, 1)[0];
        this.rules.splice(targetIndex, 0, movedRule);
        this.save();
    }
}

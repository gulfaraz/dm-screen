import { DatePipe, NgTemplateOutlet } from '@angular/common';
import {
    Component,
    ContentChild,
    EventEmitter,
    Input,
    OnInit,
    Output,
    TemplateRef,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
    IonButton,
    IonCol,
    IonGrid,
    IonIcon,
    IonLabel,
    IonNote,
    IonRow,
    IonSegment,
    IonSegmentButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { saveSharp, trashOutline } from 'ionicons/icons';

import { Editable } from './editable.type';

addIcons({ saveSharp, trashOutline });

@Component({
    selector: 'app-editable',
    templateUrl: './editable.component.html',
    imports: [
        IonGrid,
        IonRow,
        IonCol,
        IonSegment,
        IonSegmentButton,
        IonLabel,
        IonNote,
        IonButton,
        IonIcon,
        FormsModule,
        DatePipe,
        NgTemplateOutlet,
    ],
})
export class EditableComponent<T extends Editable> implements OnInit {
    @Input() editable!: T;
    @Input() form!: NgForm;
    @Input() skipPreview: boolean = false;

    @Output() save = new EventEmitter<T>();
    @Output() delete = new EventEmitter<T>();

    isEditing: boolean = false;

    @ContentChild('preview')
    previewTemplate?: TemplateRef<unknown>;

    @ContentChild('edit')
    editTemplate?: TemplateRef<unknown>;

    ngOnInit() {
        this.isEditing = this.skipPreview;
    }

    onSave() {
        this.editable.updated = new Date().toISOString();
        this.save.emit(this.editable);
        this.form.form.markAsPristine();
    }
}

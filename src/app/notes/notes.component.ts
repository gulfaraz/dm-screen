import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    imports: [IonContent, FooterComponent],
})
export class NotesComponent {}

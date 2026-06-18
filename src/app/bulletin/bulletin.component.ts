import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { MarkdownComponent } from 'ngx-markdown';

import { FooterComponent } from '../shared/footer/footer.component';
import { injectCurrentRoute } from '../shared/route-tracker';

@Component({
    selector: 'app-bulletin',
    templateUrl: './bulletin.component.html',
    imports: [IonContent, MarkdownComponent, FooterComponent],
})
export class BulletinComponent {
    route = injectCurrentRoute('/unknown');
}

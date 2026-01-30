import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { FooterComponent } from '../shared/footer/footer.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
    selector: 'app-legal',
    templateUrl: './legal.component.html',
    styleUrls: ['./legal.component.scss'],
    imports: [IonContent, MarkdownComponent, FooterComponent],
})
export class LegalComponent {
    private router = inject(Router);

    route = '/terms';

    constructor() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.route = event.urlAfterRedirects;
            }
        });
    }
}

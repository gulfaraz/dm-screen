import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-legal',
    templateUrl: './legal.component.html',
    styleUrls: ['./legal.component.scss'],
    standalone: false,
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

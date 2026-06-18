import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideMarkdown } from 'ngx-markdown';

import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes, withHashLocation()),
        provideIonicAngular({ mode: 'ios' }),
        provideHttpClient(),
        provideMarkdown({ loader: HttpClient }),
    ],
}).catch((err) => console.error(err));

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
    provideAnalytics,
    getAnalytics,
    ScreenTrackingService,
} from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { DMScreenComponent } from './dm-screen.component';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot({ mode: 'ios' }),
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
    ],
    declarations: [AppComponent, DMScreenComponent],
    bootstrap: [AppComponent],
    providers: [ScreenTrackingService],
})
export class AppModule {}

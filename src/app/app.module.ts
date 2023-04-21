import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DMScreenComponent } from './dm-screen.component';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot({ mode: 'ios' }),
        AppRoutingModule,
    ],
    declarations: [AppComponent, DMScreenComponent],
    bootstrap: [AppComponent],
    providers: [],
})
export class AppModule {}

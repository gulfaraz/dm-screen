import { TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { App } from './app';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterModule, IonicModule.forRoot(), App],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});

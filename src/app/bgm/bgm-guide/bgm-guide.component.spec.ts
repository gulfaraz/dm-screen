import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgmGuideComponent } from './bgm-guide.component';

describe('BgmGuideComponent', () => {
    let component: BgmGuideComponent;
    let fixture: ComponentFixture<BgmGuideComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BgmGuideComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BgmGuideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

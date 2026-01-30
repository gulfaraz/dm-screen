import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentTrackerGuideComponent } from './alignment-tracker-guide.component';

describe('AlignmentTrackerGuideComponent', () => {
    let component: AlignmentTrackerGuideComponent;
    let fixture: ComponentFixture<AlignmentTrackerGuideComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AlignmentTrackerGuideComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AlignmentTrackerGuideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

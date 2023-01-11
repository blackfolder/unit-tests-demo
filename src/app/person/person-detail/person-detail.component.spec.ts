import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PersonDetailComponent } from './person-detail.component';

describe('PersonDetailComponent', () => {
    let component: PersonDetailComponent;
    let fixture: ComponentFixture<PersonDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PersonDetailComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PersonDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should trigger output event when header clicked', () => { // Why we don't need waitForAsync?
        const debugElement: DebugElement = fixture.debugElement;
        const header = debugElement.query(By.css('h2'));
        let onClickMessage;
        component.headerCliked.subscribe((message) => onClickMessage = message);

        header.triggerEventHandler('click');

        expect(onClickMessage).toBe('Header clicked!');
    });

    it('should render correctly - snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});

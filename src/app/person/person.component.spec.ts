import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mock, MockProxy } from 'jest-mock-extended';
import { PersonDetailComponent } from './person-detail/person-detail.component';

import { PersonComponent } from './person.component';
import { PersonData } from './services/person-api.service';
import { PersonDataService } from './services/person-data.service';

describe('PersonComponent', () => {
    let component: PersonComponent;
    let fixture: ComponentFixture<PersonComponent>;
    let personDataServiceMock: MockProxy<PersonDataService>;

    beforeEach(async () => {
        personDataServiceMock = mock<PersonDataService>();

        await TestBed.configureTestingModule({
            declarations: [PersonComponent, PersonDetailComponent], // what if child component has dependencies/child components?
            providers: [
                { provide: PersonDataService, useValue: personDataServiceMock },
            ],
        }).compileComponents(); // setup freezed from this moment

        fixture = TestBed.createComponent(PersonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call data service on init', () => {
        component.ngOnInit();

        expect(personDataServiceMock.getPersonData).toHaveBeenCalled();
    });

    it('should call data service on init (TestBed inject)', () => {
        const personDataService = TestBed.inject(PersonDataService);

        expect(personDataService.getPersonData).toHaveBeenCalled();
    });

    it('should have person data available on init', () => {
        personDataServiceMock.getPersonData.mockReturnValue({} as PersonData);

        component.ngOnInit();

        expect(component.personData).toBeTruthy();
    });

    it('should have <h1> elemen with title', () => { // what if there's no detect changes?
        const element: HTMLElement = fixture.nativeElement;
        const header = element.querySelector('h1');

        expect(header).not.toBeNull();
        expect(header?.textContent).toContain('This is a demo app!!');
    });

    it('should have <h1> elemen with title - DebugElement', () => {
        const debugElement: DebugElement = fixture.debugElement;
        const headerByCss = debugElement.query(By.css('.title'));

        expect(headerByCss).not.toBeNull();
        expect(headerByCss?.nativeElement.textContent).toContain('This is a demo app!!');
    });

    it('should update title when header clicked', () => {
        const element: HTMLElement = fixture.nativeElement;
        const header = element.querySelector('h1');

        expect(header?.textContent).toContain('This is a demo app!!');

        header?.dispatchEvent(new Event('click'));
        fixture.detectChanges();

        expect(header?.textContent).toContain('Title clicked');
    });
});

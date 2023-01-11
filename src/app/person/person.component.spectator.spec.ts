import { Spectator, createComponentFactory } from '@ngneat/spectator/jest'; // Ważne, żeby importowąć z 
import { MockComponent } from 'ng-mocks';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonComponent } from './person.component';
import { PersonDataService } from './services/person-data.service';

describe('PersonComponent - Spectator', () => {
    let spectator: Spectator<PersonComponent>;
    const createComponent = createComponentFactory({
        component: PersonComponent,
        declarations: [
            MockComponent(PersonDetailComponent),
        ],
        providers: [],
        mocks: [PersonDataService],
        // detectChanges: false
    });

    beforeEach(() => spectator = createComponent());

    it('should have a title', () => {
        const header = spectator.query('h1');
        // const headerByClass = spectator.query('.title');

        expect(header).toHaveClass('title')
    });

    it('should call data service on init', () => {
        const personDataServiceMock = spectator.inject(PersonDataService);

        expect(personDataServiceMock.getPersonData).toHaveBeenCalledTimes(1);
    });
});


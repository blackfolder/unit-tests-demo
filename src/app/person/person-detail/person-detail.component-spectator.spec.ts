import { createComponentFactory, createHostFactory, Spectator } from '@ngneat/spectator/jest';
import { PersonDetailComponent } from './person-detail.component';

describe('PersonDetailComponent - Spectator', () => {
    let spectator: Spectator<PersonDetailComponent>;
    const createComponent = createComponentFactory(PersonDetailComponent);

    beforeEach(() => spectator = createComponent());

    it('should display first name and last name', () => {
        spectator.setInput({
            firstName: 'Paweł',
            lastName: 'Kowalski'
        });

        expect(spectator.query('p')).toHaveExactText('Paweł Kowalski');
    });

    it('should emit event on header click', () => {
        let output;
        spectator.output('headerCliked').subscribe(result => (output = result));

        spectator.component.onHeaderClicked();

        expect(output).toEqual('Header clicked!');
    });
});

describe('PersonDetailComponent - Spectator with host', () => {
    let spectator: Spectator<PersonDetailComponent>;
    const createHost = createHostFactory({
        component: PersonDetailComponent,
        template: `<unit-tests-demo-person-detail [firstName]="firstName" [lastName]="lastName"></unit-tests-demo-person-detail>`
    });

    it('should display first name and last name', () => {
        spectator = createHost(undefined, {
            hostProps: {
                firstName: 'Paweł',
                lastName: 'Kowalski'
            }
        });
        expect(spectator.query('p')).toHaveExactText('Paweł Kowalski');
    });
});
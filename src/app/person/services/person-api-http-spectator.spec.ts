import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';
import { PersonApiHttpService } from './person-api-http.service.';

describe('PersonApiHttpService', () => {
    let spectator: SpectatorHttp<PersonApiHttpService>;
    const createHttp = createHttpFactory(PersonApiHttpService);

    beforeEach(() => spectator = createHttp());

    it('should get and set person data', () => {
        spectator.service.getPersonData().subscribe();

        const req = spectator.expectOne('api/person-data', HttpMethod.GET);

        req.flush({});

        expect(spectator.service.personData).toEqual({});
    });

    it('should post person data', () => {
        spectator.service.savePersonData(10, { firstName: 'Tomek', lastName: 'Rozbicki' }).subscribe();

        const req = spectator.expectOne('api/person-data/10', HttpMethod.POST);
        expect(req.request.body['firstName']).toEqual('Tomek');
    });
});
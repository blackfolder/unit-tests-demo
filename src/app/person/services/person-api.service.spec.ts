import { fakeAsync, flush, tick, waitForAsync } from '@angular/core/testing';
import { PersonApiService } from './person-api.service';

// Service with no dependencies, can be tested as a regular JS class
describe('PersonApiService', () => {
    let service: PersonApiService;

    beforeEach(() => {
        service = new PersonApiService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return expected Morgan data (sync)', () => {
        const morganId = 10;
        const expectedData = {
            firstName: 'Morgan',
            lastName: 'Freeman',
        };

        const result = service.getPersonData(morganId);

        expect(result).toEqual(expectedData);
        // toEqual vs toBe
        //expect(result).toBe(expectedData);
    });

    // Jest
    it('should return expected Morgan data (async)', async () => {
        const morganId = 10;
        const expectedData = {
            firstName: 'Morgan',
            lastName: 'Freeman',
        };

        const result = await service.getPersonDataAsync(morganId);

        expect(result).toEqual(expectedData);
    });

    // Angular
    it('should return expected Morgan data (observable', waitForAsync(() => {
        const morganId = 10;
        const expectedData = {
            firstName: 'Morgan',
            lastName: 'Freeman',
        };

        // what would happen if there's no waitForAsync?
        service.getPersonDataObservable(morganId)
            .subscribe((result) => {
                expect(result).toEqual(expectedData);
            });
    }));

    // Angular
    it('should return expected Morgan data (setTimeout) - experiment', fakeAsync(async () => {
        const morganId = 10;
        const expectedData = {
            firstName: 'Morgan',
            lastName: 'Freeman',
        };

        let result;

        setTimeout(() => {
            result = service.getPersonData(morganId);
        }, 300);

        tick(300);
        // flushMicrotasks();
        // flush();

        expect(result).toEqual(expectedData);
    }));
});

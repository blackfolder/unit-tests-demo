import { TestBed, waitForAsync } from '@angular/core/testing';
import { mock, MockProxy } from 'jest-mock-extended';
import { of } from 'rxjs';
import { PersonApiService } from './person-api.service';
import { PersonDataService } from './person-data.service';

describe('PersonDataService', () => {
    let service: PersonDataService;
    let personApiServiceSpy: MockProxy<PersonApiService>;

    beforeEach(() => {
        const personApiService: MockProxy<PersonApiService> = mock<PersonApiService>();
        TestBed.configureTestingModule({
            providers: [
                PersonDataService,
                { provide: PersonApiService, useValue: personApiService }
            ]
        });

        service = TestBed.inject(PersonDataService);
        personApiServiceSpy = TestBed.inject(PersonApiService) as MockProxy<PersonApiService>;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return expected Morgan data (sync)', () => {
        const morganId = 10;
        const expectedData = {
            firstName: 'Morganek',
            lastName: 'Freemanek',
        };
        personApiServiceSpy.getPersonData.mockReturnValue(expectedData);

        const result = service.getPersonData(morganId);

        expect(result).toEqual(expectedData);
    });

    it('should return expected Morgan data (async) - experiment', waitForAsync(async () => {
        const morganId = 10;
        const expectedData = {
            firstName: 'Morganek',
            lastName: 'Freemanek',
        };
        personApiServiceSpy.getPersonDataAsync.mockResolvedValue(expectedData);

        const result = await service.getPersonDataAsync(morganId);

        expect(result).toEqual(expectedData);
    }));

    it('should return expected Morgan data (observable) - experiment', () => {
        const morganId = 10;
        const expectedData = {
            firstName: 'Morganek',
            lastName: 'Freemanek',
        };
        personApiServiceSpy.getPersonDataObservable.mockReturnValue(of(expectedData));

        service.getPersonDataObservable(morganId)
            .subscribe((result) => {
                expect(result).toEqual(expectedData);
            });
    });
});

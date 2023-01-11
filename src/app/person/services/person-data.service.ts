import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonApiService, PersonData } from './person-api.service';

@Injectable({
    providedIn: 'root'
})
export class PersonDataService {

    constructor(private readonly personApiService: PersonApiService) { }

    getPersonData(personId: number): PersonData {
        return this.personApiService.getPersonData(personId);
    }

    getPersonDataObservable(personId: number): Observable<PersonData> {
        return this.personApiService.getPersonDataObservable(personId);
    }

    async getPersonDataAsync(personId: number): Promise<PersonData> {
        return this.personApiService.getPersonDataAsync(personId);
    }
}

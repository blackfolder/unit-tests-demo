import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, of, scheduled } from 'rxjs';

export interface PersonData {
    firstName: string;
    lastName: string;
}

const PERSON_DATA: Record<number, PersonData> = {
    10: {
        firstName: 'Morgan',
        lastName: 'Freeman',
    }
};

@Injectable({
    providedIn: 'root'
})
export class PersonApiService {

    getPersonData(personId: number): PersonData {
        return PERSON_DATA[personId];
    }

    async getPersonDataAsync(personId: number): Promise<PersonData> {
        return new Promise(resolve => resolve(PERSON_DATA[personId]));
    }

    getPersonDataObservable(personId: number): Observable<PersonData> {
        return scheduled(of(PERSON_DATA[personId]), asyncScheduler);
    }
}

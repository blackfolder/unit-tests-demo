import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PersonData } from './person-api.service';

@Injectable({
    providedIn: 'root'
})
export class PersonApiHttpService {
    personData: PersonData | null = null

    constructor(private readonly httpClient: HttpClient) { }

    getPersonData(): Observable<PersonData> {
        return this.httpClient.get<PersonData>('api/person-data').pipe(
            tap(personData => this.personData = personData),
        );
    }

    savePersonData(personId: number, personData: PersonData): Observable<number> {
        return this.httpClient.post<number>(`api/person-data/${personId}`, personData);
    }
}

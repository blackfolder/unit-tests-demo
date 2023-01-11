import { Component, OnInit } from '@angular/core';
import { PersonData } from './services/person-api.service';
import { PersonDataService } from './services/person-data.service';

@Component({
    selector: 'unit-tests-demo-person',
    template: `
        <h1 class="title" (click)="onTitleClicked()">
            {{ title }}
        </h1>
        <unit-tests-demo-person-detail
            [firstName]="personData?.firstName"
            [lastName]="personData?.lastName"
        ></unit-tests-demo-person-detail>
    `,
    styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
    title = 'TITLE: This is a demo app!!';
    personData: PersonData | undefined;

    constructor(private readonly personDataService: PersonDataService) { }

    ngOnInit(): void {
        this.personData = this.personDataService.getPersonData(10);
    }

    onTitleClicked(): void {
        this.title = 'Title clicked';
    }
}

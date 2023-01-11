import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'unit-tests-demo-person-detail',
    template: `,
    <div unitTestsDemoColorChanger>
        <h2 (click)="onHeaderClicked()" class="header">Say my name!</h2>
        <p>{{ firstName }} {{ lastName }}</p>
    </div>`,
    styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent {
    @Input() firstName: string | undefined = 'No name';
    @Input() lastName: string | undefined  = 'No last name';
    
    @Output() headerCliked = new EventEmitter<string>();

    onHeaderClicked(): void {
        this.headerCliked.emit('Header clicked!');
    }
}

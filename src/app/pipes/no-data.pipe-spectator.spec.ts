import { Component, Input } from '@angular/core';
import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator/jest';
import { NoDataPipe } from './no-data.pipe';

describe('NoDataPipe', () => {
    let spectator: SpectatorPipe<NoDataPipe>;
    const createPipe = createPipeFactory(NoDataPipe);

    it('should display dash for empty value', () => {
        spectator = createPipe(`{{ '' | noData }}`);

        expect(spectator.element).toHaveText('-');
    });
});


/////////////////////////

@Component({
    template: `<div>{{ text | noData }}</div>`
})
class CustomHostComponent {
    @Input() public text = '';
}

describe('NoDataPipe - Custom host component', () => {
    let spectator: SpectatorPipe<NoDataPipe>;
    const createPipe = createPipeFactory({
        pipe: NoDataPipe,
        host: CustomHostComponent
    });

    it('should display dash for empty value', () => {
        spectator = createPipe({
            hostProps: {
                text: '',
            }
        });

        expect(spectator.element).toHaveText('-');
    });
});
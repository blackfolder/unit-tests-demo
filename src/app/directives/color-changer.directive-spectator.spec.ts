import { createDirectiveFactory, SpectatorDirective } from "@ngneat/spectator/jest";
import { ColorChangerDirective } from "./color-changer.directive";

describe('HighlightDirective', () => {
    let spectator: SpectatorDirective<ColorChangerDirective>;
    const createDirective = createDirectiveFactory({
        directive: ColorChangerDirective,
        template: `<div unitTestsDemoColorChanger></div>`
    });

    beforeEach(() => spectator = createDirective());

    it('should change the background color', () => {
        expect(spectator.element).toHaveStyle({
            backgroundColor: 'yellow'
        });

        // What's available here?
        spectator.dispatchMouseEvent(spectator.element, 'click');

        expect(spectator.element).toHaveStyle({
            backgroundColor: 'green'
        });
    });
});
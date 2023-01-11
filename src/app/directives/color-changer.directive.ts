import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({ selector: '[unitTestsDemoColorChanger]' })
export class ColorChangerDirective {

    @HostBinding('style.background-color') backgroundColor = 'yellow';

    @HostListener('click')
    onClick() {
        this.backgroundColor = 'green';
    }
}
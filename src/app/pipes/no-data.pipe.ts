import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noData'
})
export class NoDataPipe implements PipeTransform {

    transform(value: string | number): string | number {
        return value ? value : '-';
    }

}

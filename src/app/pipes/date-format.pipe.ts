import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, format?: string): string | null {
    return value ? new Date(Number(value)).toLocaleDateString('en-GB', { weekday: 'long' }) : null;
  }

}

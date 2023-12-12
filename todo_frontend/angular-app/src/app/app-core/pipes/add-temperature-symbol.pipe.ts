import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTemperatureSymbol'
})
export class AddTemperatureSymbolPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // Handle null or undefined values
    
    return value + '°C';
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'colorName'
})
export class ColorNamePipe implements PipeTransform {

  transform(value: number, color: Color[]): string {
    let name=color?.find(c=>c.id===value).name
    return name;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], filterText: string): Color[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?value.filter(c=>c.name.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }
}

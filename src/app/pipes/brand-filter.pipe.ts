import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Brand[], filterText: string): Brand[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?value.filter(b=>b.name.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}

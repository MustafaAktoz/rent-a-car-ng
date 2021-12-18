import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brandName'
})
export class BrandNamePipe implements PipeTransform {

  transform(value: number, brand: Brand[]): string {
    let name=brand?.find(b=>b.id==value).name

    return name;

  }

}

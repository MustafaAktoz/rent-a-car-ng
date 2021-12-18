import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/car-detail-dto';

@Pipe({
  name: 'carDetailDtoFilter'
})
export class CarDetailDtoFilterPipe implements PipeTransform {

  transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?value.filter(c=>c.name.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}

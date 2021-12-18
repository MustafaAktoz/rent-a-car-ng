import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CarImage } from '../models/car-image';
import { ListResponseModel } from '../models/list-response-model';
import { ERROR, SUCCESS } from '../models/messages';
import { APIPATH } from '../models/paths';
import { ResponseModel } from '../models/response-model';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  CAR_IMAGES_PATH=APIPATH+"carImages/"

  constructor(private httpClient:HttpClient,
    private toastrService:ToastrService,
    private templatesService:TemplatesService) { }

  delete(id:number)
  {
    this.httpClient.post<ResponseModel>(this.CAR_IMAGES_PATH+"delete?id="+id,null).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
      window.location.reload()
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  getByCarId(carId:number):Observable<ListResponseModel<CarImage>>
  {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.CAR_IMAGES_PATH+"getbycarid?carId="+carId)
  }
}

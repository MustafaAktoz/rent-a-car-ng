import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/car-detail-dto';
import { ListResponseModel } from '../models/list-response-model';
import { ERROR, SUCCESS } from '../models/messages';
import { APIPATH } from '../models/paths';
import { ResponseModel } from '../models/response-model';
import { SingleResponseModel } from '../models/single-reponse-model';
import { LocalStorageService } from './local-storage.service';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  CARS_PATH=APIPATH+"cars/"

  constructor(private httpClient:HttpClient,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService,
    private templatesService:TemplatesService) { }

  add(car:Car)
  {
    this.httpClient.post<ResponseModel>(this.CARS_PATH+"add",car).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  update(car:Car)
  {
    this.httpClient.post<ResponseModel>(this.CARS_PATH+"update",car).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  delete(car:Car)
  {
    this.httpClient.post<ResponseModel>(this.CARS_PATH+"delete",car).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
      window.location.reload()
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  getAll()
  {
    return this.httpClient.get<ListResponseModel<Car>>(this.CARS_PATH+"getall")
  }

  getCarDetails()
  {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.CARS_PATH+"getcardetails")
  }

  getCarDetailById(id:number)
  {
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(this.CARS_PATH+"getcardetailbyid?id="+id)
  }

  getCarDetailsByBrandId(brandId:number)
  {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.CARS_PATH+"getcardetailsbybrandid?brandId="+brandId)
  }
  getCarDetailsByColorId(colorId:number)
  {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.CARS_PATH+"getcardetailsbycolorid?colorId="+colorId)
  }

  get getCurrentCar(){
    let result=this.localStorageService.get("car")
    let car:Car= JSON.parse(result)
    return car
  }
}

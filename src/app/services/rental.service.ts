import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListResponseModel } from '../models/list-response-model';
import { ERROR, SUCCESS } from '../models/messages';
import { APIPATH, SIMPLEPATH } from '../models/paths';
import { RentDto } from '../models/rent-dto';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rental-detail-dto';
import { ResponseModel } from '../models/response-model';
import { SingleResponseModel } from '../models/single-reponse-model';
import { LocalStorageService } from './local-storage.service';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  RENTALS_PATH=APIPATH+"rentals/"

  constructor(private httpClient:HttpClient,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService,
    private router:Router,
    private templatesService:TemplatesService) { }

  getRentalDetails(){
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.RENTALS_PATH+"getrentaldetails")
  }

  getRentalDetailsByCustomerId(customerId:number){
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.RENTALS_PATH+"getrentaldetailsbycustomerid?customerId="+customerId);
  }
  
  add(rentDto:RentDto){
    this.httpClient.post<ResponseModel>(this.RENTALS_PATH+"add",rentDto).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
      this.localStorageService.delete("rental")
      this.router.navigate(["cars"])
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  deliver(rental:Rental){
    this.httpClient.post<ResponseModel>(this.RENTALS_PATH+"deliver",rental).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
      this.localStorageService.delete("rental")
      window.location.reload()
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  getById(id:number){
    return this.httpClient.get<SingleResponseModel<Rental>>(this.RENTALS_PATH+"getbyid?id="+id);
  }

  rulesForAdd(rental:Rental)
  {
    return this.httpClient.post<ResponseModel>(this.RENTALS_PATH+"rulesforadd",rental)
  }
}

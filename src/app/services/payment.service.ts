import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListResponseModel } from '../models/list-response-model';
import { ERROR, SUCCESS } from '../models/messages';
import { APIPATH } from '../models/paths';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/response-model';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  PAYMENTS_PATH=APIPATH+"payments/"

  constructor(private httpClient:HttpClient,
    private toastrService:ToastrService,
    private router:Router,
    private templatesService:TemplatesService) { }

  save(payment:Payment){
    this.httpClient.post<ResponseModel>(this.PAYMENTS_PATH+"add",payment).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  delete(payment:Payment){
    this.httpClient.post<ResponseModel>(this.PAYMENTS_PATH+"delete",payment).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
      window.location.reload()
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  getByUserId(userId:number)
  {
    return this.httpClient.get<ListResponseModel<Payment>>(this.PAYMENTS_PATH+"getbyuserid?userId="+userId)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/list-response-model';
import { ERROR, SUCCESS } from '../models/messages';
import { APIPATH } from '../models/paths';
import { ResponseModel } from '../models/response-model';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  BRANDS_PATH=APIPATH+"brands/"

  constructor(private httpClient:HttpClient,
    private toastrService:ToastrService,
    private templatesService:TemplatesService) { }

  add(brand:Brand)
  {
    this.httpClient.post<ResponseModel>(this.BRANDS_PATH+"add",brand).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  update(brand:Brand)
  {
    this.httpClient.post<ResponseModel>(this.BRANDS_PATH+"update",brand).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  delete(brand:Brand){
    this.httpClient.post<ResponseModel>(this.BRANDS_PATH+"delete",brand).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
      window.location.reload()
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  getAll()
  {
    return this.httpClient.get<ListResponseModel<Brand>>(this.BRANDS_PATH+"getall")
  }
}

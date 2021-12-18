import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/list-response-model';
import { ERROR, SUCCESS } from '../models/messages';
import { APIPATH } from '../models/paths';
import { ResponseModel } from '../models/response-model';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  COLORS_PATH=APIPATH+"colors/"

  constructor(private httpClient:HttpClient,
    private toastrService:ToastrService,
    private templatesService:TemplatesService
    ) { }

  add(color:Color)
  {
    this.httpClient.post<ResponseModel>(this.COLORS_PATH+"add",color).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  update(color:Color)
  {
    this.httpClient.post<ResponseModel>(this.COLORS_PATH+"update",color).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  delete(color:Color){
    this.httpClient.post<ResponseModel>(this.COLORS_PATH+"delete",color).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
      window.location.reload()
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }

  getAll()
  {
    return this.httpClient.get<ListResponseModel<Color>>(this.COLORS_PATH+"getall")
  }
  
}


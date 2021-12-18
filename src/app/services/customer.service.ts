import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/list-response-model';
import { APIPATH } from '../models/paths';
import { SingleResponseModel } from '../models/single-reponse-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  CUSTOMERS_PATH=APIPATH+"customers/"

  constructor(private httpClient:HttpClient,
    private authService:AuthService) { }

  getAll()
  {
    return this.httpClient.get<ListResponseModel<Customer>>(this.CUSTOMERS_PATH+"getall")
  }

  getCurrentCustomer():Observable<SingleResponseModel<Customer>>
  {
    let userId=this.authService.getCurrentUserId
    return this.httpClient.get<SingleResponseModel<Customer>>(this.CUSTOMERS_PATH+"getbyuserid?userId="+userId)
  }
}

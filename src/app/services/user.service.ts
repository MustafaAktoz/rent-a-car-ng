import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ERROR, SUCCESS } from '../models/messages';
import { APIPATH } from '../models/paths';
import { ResponseModel } from '../models/response-model';
import { SingleResponseModel } from '../models/single-reponse-model';
import { User } from '../models/user';
import { UserDto } from '../models/user-dto';
import { AuthService } from './auth.service';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USERS_PATH=APIPATH+"users/"

  constructor(private httpClient:HttpClient,
    private authService:AuthService,
    private toastrService:ToastrService,
    private templatesService:TemplatesService) { }

  getUserDtoById(id:number):Observable<SingleResponseModel<UserDto>>
  {
    return this.httpClient.get<SingleResponseModel<UserDto>>(this.USERS_PATH+"getuserdtobyid?id="+id)
  }

  getById(id:number):Observable<SingleResponseModel<User>>
  {
    return this.httpClient.get<SingleResponseModel<User>>(this.USERS_PATH+"getbyid?id="+id)
  }

  getCurrentUserDto():Observable<SingleResponseModel<UserDto>>
  {
    let id=this.authService.getCurrentUserId
    return this.getUserDtoById(id)
  }

  getCurrentUser():Observable<SingleResponseModel<User>>
  {
    let id=this.authService.getCurrentUserId
    return this.getById(id)
  }

  update(user:User)
  {
    this.httpClient.post<ResponseModel>(this.USERS_PATH+"update",user).subscribe(response=>{
      this.toastrService.success(response.message,SUCCESS)
      window.location.reload()
    },errorResponse=> this.templatesService.errorResponse(errorResponse))
  }
}

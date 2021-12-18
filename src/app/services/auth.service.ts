import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { ToastrService } from 'ngx-toastr';
import { AccessToken } from '../models/access-token';
import { ChangePasswordDto } from '../models/change-password-dto';
import { LoginDto } from '../models/login-dto';
import { ERROR, LOGİN_SUCCESSFUL, REGISTER_SUCCESSFUL, SUCCESS, YOU_MUST_LOGIN } from '../models/messages';
import { APIPATH } from '../models/paths';
import { RegisterDto } from '../models/register-dto';
import { ResponseModel } from '../models/response-model';
import { SingleResponseModel } from '../models/single-reponse-model';
import { LocalStorageService } from './local-storage.service';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_PATH = APIPATH + "auth/"

  jwtHelperService: JwtHelperService = new JwtHelperService()
  TOKEN_KEY: string = "token";
  constructor(private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private router: Router,
    private templatesService: TemplatesService
  ) { }

  login(loginDto: LoginDto) {
    this.httpClient.post<SingleResponseModel<AccessToken>>(this.AUTH_PATH + "login", loginDto).subscribe(response => {
      this.localStorageService.add(this.TOKEN_KEY, response.data.token)
      this.toastrService.success(LOGİN_SUCCESSFUL, SUCCESS)
      this.router.navigate(["/cars"])
    }, errorResponse => this.templatesService.errorResponse(errorResponse))
  }

  register(registerDto: RegisterDto) {
    this.httpClient.post<SingleResponseModel<AccessToken>>(this.AUTH_PATH + "register", registerDto).subscribe(response => {
      this.localStorageService.add(this.TOKEN_KEY, response.data.token)
      this.toastrService.success(REGISTER_SUCCESSFUL, SUCCESS)
      this.router.navigate(["/cars"])
    }, errorResponse => this.templatesService.errorResponse(errorResponse))
  }

  changePassword(changePasswordDto: ChangePasswordDto) {
    this.httpClient.post<ResponseModel>(this.AUTH_PATH + "changepassword", changePasswordDto).subscribe(response => {
      this.toastrService.success(response.message, SUCCESS)
      window.location.reload()
    }, errorResponse => this.templatesService.errorResponse(errorResponse))
  }

  logout() {
    this.localStorageService.delete(this.TOKEN_KEY)
  }

  get getToken() {
    return this.localStorageService.get(this.TOKEN_KEY)
  }

  get loggedIn() {
    let token = this.getToken
    return !this.jwtHelperService.isTokenExpired(token)
  }

  get getDecodedToken() {
    return this.jwtHelperService.decodeToken(this.getToken)
  }

  get getCurrentUserId() {

    let decodedToken = this.getDecodedToken
    let userId = Object.keys(decodedToken).filter(t => t.endsWith("/nameidentifier"))[0]
    return Number(decodedToken[userId])
  }

  get getCurrentRoles() {
    let decodedToken = this.getDecodedToken
    let roles = Object.keys(decodedToken).filter(t => t.endsWith("/role"))[0]
    return decodedToken[roles]
  }

  get isAdmin(): boolean {
    if (this.loggedIn) {
      let roles = this.getCurrentRoles
      if (roles)
        for (let i = 0; i < roles.length; i++) {
          if (roles[i] == "admin") return true
        }
    }
    return false
  }
}
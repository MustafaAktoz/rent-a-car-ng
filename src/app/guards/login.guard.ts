import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ERROR, LOGİN_SUCCESSFUL, SUCCESS, YOU_MUST_LOGIN } from '../models/messages';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(!this.authService.loggedIn)
      {
        this.toastrService.error(YOU_MUST_LOGIN,ERROR)
        this.router.navigate(["login"])
        return false;
      }
    
    return true;
  }
  
}

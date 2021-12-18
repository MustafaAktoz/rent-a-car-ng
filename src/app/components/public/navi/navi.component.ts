import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  customer:Customer
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  loggedIn()
  {
    return this.authService.loggedIn
  }

  isAdmin()
  {
    return this.authService.isAdmin
  }
  
}

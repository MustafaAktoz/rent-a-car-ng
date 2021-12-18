import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-findeks-point-board',
  templateUrl: './findeks-point-board.component.html',
  styleUrls: ['./findeks-point-board.component.css']
})
export class FindeksPointBoardComponent implements OnInit {

  customer:Customer
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    
    this.getCurrentCustomer()
  }

  getCurrentCustomer()
  {
    this.customerService.getCurrentCustomer().subscribe(response=>{
      this.customer=response.data
    })
  }
}

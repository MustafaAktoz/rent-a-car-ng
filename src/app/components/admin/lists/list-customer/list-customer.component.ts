import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers:Customer[]
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll()
  {
    this.customerService.getAll().subscribe(response=>{
      this.customers=response.data
    })
  }
}

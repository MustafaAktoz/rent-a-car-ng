import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { ERROR, FORM_IS_MISSING, GOING_TO_PAYMENT, SUCCESS } from 'src/app/models/messages';
import { Rental } from 'src/app/models/rental';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  customer:Customer
  carId:number
  rentFormGroup: FormGroup
  constructor(private rentalService: RentalService,
    private formBuilder: FormBuilder,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private customerService:CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(response=>{
      this.getCurrentCustomer()
      this.carId=Number(response["carId"])
    })
    this.createRentFormGroup()
  }

  createRentFormGroup() {
    this.rentFormGroup = this.formBuilder.group({
      rentDate: ["", Validators.required],
      returnDate: [null]
    })
  }

  add() {
    if (this.rentFormGroup.valid) {
      let rental:Rental = Object.assign({}, this.rentFormGroup.value)
      if(!rental.returnDate)rental.returnDate=null
      rental.carId=this.carId
      rental.customerId=this.customer.id

      this.rentalService.rulesForAdd(rental).subscribe(response=>{
        let rentalJson=JSON.stringify(rental);
        this.localStorageService.add("rental",rentalJson)
        this.toastrService.success(GOING_TO_PAYMENT,SUCCESS)
        this.router.navigate(["payment"])
      },responseError=>{
        this.toastrService.error(responseError.error,ERROR)
        console.log(responseError.error)
      })
      
    }
    else{
      this.toastrService.error(FORM_IS_MISSING,ERROR)
    }
  }

  getCurrentCustomer(){
    this.customerService.getCurrentCustomer().subscribe(response=>{
      this.customer=response.data
    })
  }
}

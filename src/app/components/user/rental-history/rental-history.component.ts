import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { RentalDetailDto } from 'src/app/models/rental-detail-dto';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-history',
  templateUrl: './rental-history.component.html',
  styleUrls: ['./rental-history.component.css']
})
export class RentalHistoryComponent implements OnInit {

  rentalDetailDtos: RentalDetailDto[]
  constructor(private authService: AuthService,
    private rentalService: RentalService,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getByCustomerId()
  }

  getByCustomerId() {
    this.customerService.getCurrentCustomer().subscribe(response => {
      this.rentalService.getRentalDetailsByCustomerId(response.data.id).subscribe(response => {
        this.rentalDetailDtos = response.data
      })
    })

  }
}

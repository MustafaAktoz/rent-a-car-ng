import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetailDto } from 'src/app/models/rental-detail-dto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-list-rental',
  templateUrl: './list-rental.component.html',
  styleUrls: ['./list-rental.component.css']
})
export class ListRentalComponent implements OnInit {

  currentRental:Rental
  rentalDetailDtos:RentalDetailDto[]
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }

  getRentalDetails()
  {
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentalDetailDtos=response.data
    })
  }

  setCurrentRental(id:number){
    this.rentalService.getById(id).subscribe(response=>{
      this.currentRental=response.data
    })
  }

  deliver(){
    this.rentalService.deliver(this.currentRental);
  }

}

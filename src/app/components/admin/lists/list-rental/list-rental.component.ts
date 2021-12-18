import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rental-detail-dto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-list-rental',
  templateUrl: './list-rental.component.html',
  styleUrls: ['./list-rental.component.css']
})
export class ListRentalComponent implements OnInit {

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

}

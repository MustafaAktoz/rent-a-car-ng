import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { SIMPLEPATH } from 'src/app/models/paths';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetailDtos:CarDetailDto[]
  filterText:string
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]) this.getCarDetailsByBrandId(params["brandId"])
      else if(params["colorId"]) this.getCarDetailsByColorId(params["colorId"])
      else this.getCarDetails()
    })
  }

  getCarDetails()
  {
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetailDtos=response.data
    })
  }

  getCarDetailsByBrandId(brandId:number)
  {
    this.carService.getCarDetailsByBrandId(brandId).subscribe(response=>{
      this.carDetailDtos=response.data
    })
  }

  getCarDetailsByColorId(colorId:number)
  {
    this.carService.getCarDetailsByColorId(colorId).subscribe(response=>{
      this.carDetailDtos=response.data
    })
  }

  getCarImage(carDetailDto:CarDetailDto)
  {
    return SIMPLEPATH+carDetailDto.carImages[0].imagePath
  }

  
}

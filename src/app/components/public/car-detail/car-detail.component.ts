import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car-detail-dto';
import { CarImage } from 'src/app/models/car-image';
import { SIMPLEPATH } from 'src/app/models/paths';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetailDto:CarDetailDto
  carImages:CarImage[]
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCarDetailById(params["carId"])
    })
  }

  getCarDetailById(id:number)
  {
    this.carService.getCarDetailById(id).subscribe(response=>{
      this.carDetailDto=response.data
      this.carImages=response.data.carImages
    })
  }

  getCarImage(carImage:CarImage)
  {
    return SIMPLEPATH+carImage.imagePath
  }

  getActiveCssClass(carImage:CarImage)
  {
    if(carImage==this.carImages[0]) return "active"

    return ""
  }
}

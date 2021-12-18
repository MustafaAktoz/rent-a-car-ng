import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  
  cars:Car[]
  brands:Brand[]
  colors:Color[]
  currentCar:Car
  filterText:string
  constructor(private carService:CarService,
    private localStorageService:LocalStorageService,
    private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
    this.getAll()
  }

  getAll()
  {
    this.carService.getAll().subscribe(response=>{
      this.cars=response.data
    })
  }

  saveCurrentCar(car:Car)
  {
    this.localStorageService.add("car",JSON.stringify(car))
  }

  getBrands()
  {
    this.brandService.getAll().subscribe(response=>{
      this.brands=response.data
    })
  }

  getColors()
  {
    this.colorService.getAll().subscribe(response=>{
      this.colors=response.data
    })
  }

  delete()
  {
    this.carService.delete(this.currentCar)
  }

  setCurrentCar(car:Car){
    this.currentCar=car
  }
}

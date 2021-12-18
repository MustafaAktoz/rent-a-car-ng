import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { ERROR, FORM_IS_MISSING } from 'src/app/models/messages';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  updateCarFormGroup:FormGroup
  currentCar:Car
  brands:Brand[]
  colors:Color[]
  constructor(private carService:CarService,
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
    this.createUpdateCarFormGroup()
  }

  createUpdateCarFormGroup()
  {
    this.getCurrentCar()
    this.updateCarFormGroup=this.formBuilder.group({

      colorId:[this.currentCar.colorId,Validators.required],
      brandId:[this.currentCar.brandId,Validators.required],
      name:[this.currentCar.name,Validators.required],
      modelYear:[this.currentCar.modelYear,Validators.required],
      description:[this.currentCar.description,Validators.required],
      findeksPoint:[this.currentCar.findeksPoint,Validators.required],
      dailyPrice:[this.currentCar.dailyPrice,Validators.required]
    })
  }

  update()
  {
    if(this.updateCarFormGroup.valid)
    {
      let car:Car=Object.assign({},this.updateCarFormGroup.value)
      car.id=this.currentCar.id
      car.brandId=Number(car.brandId)
      car.colorId=Number(car.colorId)
      this.carService.update(car)
    }
    else{
      this.toastrService.error(FORM_IS_MISSING,ERROR)
    }
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

  getCurrentCar(){
    let car=this.localStorageService.get("car")

    if(car) this.currentCar=JSON.parse(car)
    else this.currentCar={id:0,brandId:0,colorId:0,name:"",modelYear:"",description:"",findeksPoint:0,dailyPrice:0}
  }

  
}

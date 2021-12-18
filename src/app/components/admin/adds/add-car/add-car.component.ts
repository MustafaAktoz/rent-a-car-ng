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

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addCarFormGroup:FormGroup
  brands:Brand[]
  colors:Color[]
  constructor(private carService:CarService,
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
    this.createAddCarFormGroup()
  }

  createAddCarFormGroup()
  {
    this.addCarFormGroup=this.formBuilder.group({

      colorId:["",Validators.required],
      brandId:["",Validators.required],
      name:["",Validators.required],
      modelYear:["",Validators.required],
      description:["",Validators.required],
      findeksPoint:["",Validators.required],
      dailyPrice:["",Validators.required]
    })
  }

  add()
  {
    if (this.addCarFormGroup.valid) {
      let car:Car=Object.assign({},this.addCarFormGroup.value)
      car.colorId=Number(car.colorId)
      car.brandId=Number(car.brandId)
      this.carService.add(car)
    }
    else
    {
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
}

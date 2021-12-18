import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { ERROR, FORM_IS_MISSING } from 'src/app/models/messages';
import { BrandService } from 'src/app/services/brand.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {

  updateBrandFormGroup:FormGroup
  currentBrand:Brand
  constructor(private brandService:BrandService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.createUpdateBrandFormGroup()
  }

  createUpdateBrandFormGroup()
  { 
    this.getCurrentBrand()
    this.updateBrandFormGroup=this.formBuilder.group({
      name:[this.currentBrand.name,Validators.required]
    })
  }

  update()
  {
    if(this.updateBrandFormGroup.valid)
    {
      let brand:Brand=Object.assign({},this.updateBrandFormGroup.value)
      brand.id=this.currentBrand.id
      this.brandService.update(brand)
    }
    else{
      this.toastrService.error(FORM_IS_MISSING,ERROR)
    }
  }

  getCurrentBrand(){
    let brand=this.localStorageService.get("brand")

    if(brand) this.currentBrand=JSON.parse(brand)
    else this.currentBrand={id:0,name:""}
  }

}

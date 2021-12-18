import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { ERROR, FORM_IS_MISSING } from 'src/app/models/messages';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  addBrandFormGroup:FormGroup
  constructor(private brandService:BrandService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAddBrandFormGroup()
  }

  createAddBrandFormGroup()
  {
    this.addBrandFormGroup=this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  add()
  {
    if (this.addBrandFormGroup.valid) {
      let brand:Brand=Object.assign({},this.addBrandFormGroup.value)
      this.brandService.add(brand)
    }
    else
    {
      this.toastrService.error(FORM_IS_MISSING,ERROR)
    }
  }
}

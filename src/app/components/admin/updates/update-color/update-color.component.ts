import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ERROR, FORM_IS_MISSING } from 'src/app/models/messages';
import { ColorService } from 'src/app/services/color.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-update-color',
  templateUrl: './update-color.component.html',
  styleUrls: ['./update-color.component.css']
})
export class UpdateColorComponent implements OnInit {

  updateColorFormGroup:FormGroup
  currentColor:Color
  constructor(private colorService:ColorService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.createUpdateColorFormGroup()
  }

  createUpdateColorFormGroup()
  {
    this.getCurrentColor()
    this.updateColorFormGroup=this.formBuilder.group({
      name:[this.currentColor.name,Validators.required]
    })
  }

  update()
  {
    if(this.updateColorFormGroup.valid)
    {
      let color:Color=Object.assign({},this.updateColorFormGroup.value)
      color.id=this.currentColor.id
      this.colorService.update(color)
    }
    else{
      this.toastrService.error(FORM_IS_MISSING,ERROR)
    }
  }

  getCurrentColor(){
    let color=this.localStorageService.get("color")

    if(color) this.currentColor=JSON.parse(color)
    else this.currentColor={id:0,name:""}
  }

}

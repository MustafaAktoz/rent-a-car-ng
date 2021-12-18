import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ERROR, FORM_IS_MISSING } from 'src/app/models/messages';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  addColorFormGroup:FormGroup

  constructor(private colorService:ColorService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAddColorFormGroup()
  }

  createAddColorFormGroup()
  {
    this.addColorFormGroup=this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  add()
  {
    if (this.addColorFormGroup.valid) {
      let color:Color=Object.assign({},this.addColorFormGroup.value)
      this.colorService.add(color)
    }
    else
    {
      this.toastrService.error(FORM_IS_MISSING,ERROR)
    }
  }

}

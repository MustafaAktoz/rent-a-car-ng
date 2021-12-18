import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ERROR, FORM_IS_MISSING } from 'src/app/models/messages';
import { RegisterDto } from 'src/app/models/register-dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup:FormGroup
  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createregisterFormGroup()
  }

  createregisterFormGroup()
  {
    this.registerFormGroup=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.email,Validators.email]],
      password:["",Validators.required],
      confirmPassword:["",Validators.required],
    })
  }

  register()
  {
    if(this.registerFormGroup.valid)
    {
      let registerDto:RegisterDto=Object.assign({},this.registerFormGroup.value)
      this.authService.register(registerDto)
    }
    else{
      this.toastrService.error(FORM_IS_MISSING,ERROR)
    }
  }
}

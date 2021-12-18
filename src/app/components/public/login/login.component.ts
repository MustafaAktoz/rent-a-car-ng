import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginDto } from 'src/app/models/login-dto';
import { ERROR, FORM_IS_MISSING } from 'src/app/models/messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup
  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginFormGroup()
  }

  createLoginFormGroup()
  {
    this.loginFormGroup=this.formBuilder.group({
      email:["",[Validators.email,Validators.email]],
      password:["",Validators.required]
    })
  }

  login()
  {
    if(this.loginFormGroup.valid)
    {
      let loginDto:LoginDto=Object.assign({},this.loginFormGroup.value)
      this.authService.login(loginDto)
    }
    else{
      this.toastrService.error(FORM_IS_MISSING,ERROR)
    }
  }
}

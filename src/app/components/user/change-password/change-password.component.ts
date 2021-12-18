import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordDto } from 'src/app/models/change-password-dto';
import { ERROR, FORM_IS_MISSING } from 'src/app/models/messages';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  
  changePasswordFormGroup:FormGroup
  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.createChangePasswordFormGroup()
  }

  createChangePasswordFormGroup()
  {
    this.changePasswordFormGroup=this.formBuilder.group({
      oldPassword:["",Validators.required],
      newPassword:["",Validators.required],
      confirmNewPassword:["",Validators.required]
    },{validator:this.confirmNewPassword})
  }

  confirmNewPassword(group:FormGroup)
  {
    return (group.get("newPassword").value===group.get("confirmNewPassword").value)?null:{misMatch:true}
  }

  changePassword()
  {
    
    if(this.changePasswordFormGroup.valid)
    {
      
      let changePasswordDto:ChangePasswordDto=Object.assign({},this.changePasswordFormGroup.value)
      changePasswordDto.userId=this.authService.getCurrentUserId
      this.authService.changePassword(changePasswordDto)
    }
    else{
      this.toastrService.error(FORM_IS_MISSING,ERROR)
    }
  }
}

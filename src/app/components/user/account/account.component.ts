import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ERROR, FORM_IS_MISSING } from 'src/app/models/messages';
import { User } from 'src/app/models/user';
import { UserDto } from 'src/app/models/user-dto';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User
  userFormGroup: FormGroup

  constructor(private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    
    this.getCurrentUser()

  }

  createUserFormGroup() {
    this.userFormGroup = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]]
    })
  }

  update() {
    if (this.userFormGroup.valid) {
      let user: User = Object.assign({}, this.userFormGroup.value)
      user.id = this.user.id
      user.passwordHash = this.user.passwordHash
      user.passwordSalt = this.user.passwordSalt
      this.userService.update(user)
    }
    else {
      this.toastrService.error(FORM_IS_MISSING, ERROR)
    }
  }

  loggedIn() {
    return this.authService.loggedIn
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(response=>{
      this.user = response.data
      this.createUserFormGroup()
    })
  }

}

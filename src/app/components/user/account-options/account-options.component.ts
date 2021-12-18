import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/models/user-dto';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.css']
})
export class AccountOptionsComponent implements OnInit {

  userDto:UserDto
  constructor(private authService:AuthService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.currentUserDto()
  }

  loggedIn()
  {
    return this.authService.loggedIn
  }

  logout(){
    this.authService.logout()
  }

  currentUserDto(){
    
    this.userService.getCurrentUserDto().subscribe(response=>{
      this.userDto=response.data
    },errorResponse=>{
      
    })
  }
}

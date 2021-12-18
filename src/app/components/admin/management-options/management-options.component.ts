import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-management-options',
  templateUrl: './management-options.component.html',
  styleUrls: ['./management-options.component.css']
})
export class ManagementOptionsComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  isAdmin():boolean
  {
      return this.authService.isAdmin
  }
}

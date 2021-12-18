import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-rent-information',
  templateUrl: './rent-information.component.html',
  styleUrls: ['./rent-information.component.css']
})
export class RentInformationComponent implements OnInit {

  payments:Payment[]
  constructor(private authSerivce:AuthService,
    private payment:PaymentService) { }

  ngOnInit(): void {
    this.getByUserId()
  }

  getByUserId(){
    let userId=this.authSerivce.getCurrentUserId;
    this.payment.getByUserId(userId).subscribe(response=>{
      this.payments=response.data;
    })
  }
}

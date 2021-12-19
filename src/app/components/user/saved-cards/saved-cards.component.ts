import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.component.html',
  styleUrls: ['./saved-cards.component.css']
})
export class SavedCardsComponent implements OnInit {

  payments:Payment[]
  currentPayment:Payment
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

  setCurrentPayment(payment:Payment){
    this.currentPayment=payment;
  }

  delete(){
    this.payment.delete(this.currentPayment);
  }

  update(){
    this.payment.update(this.currentPayment);
  }
}

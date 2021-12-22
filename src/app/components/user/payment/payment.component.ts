import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ERROR, FORM_IS_MISSING, SUCCESS } from 'src/app/models/messages';
import { Payment } from 'src/app/models/payment';
import { RentDto } from 'src/app/models/rent-dto';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  currentPayment: Payment
  payments: Payment[]
  paymentFormGroup: FormGroup
  constructor(private rentalService: RentalService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private paymentService: PaymentService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    this.getByUserId()

  }

  createPaymentFormGroup() {
    this.paymentFormGroup = this.formBuilder.group({
      cardHolderName: ["", Validators.required],
      cardNumber: ["", [Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      year: ["", [Validators.required,Validators.min(0),Validators.max(99)]],
      month: ["", [Validators.required,Validators.min(1),Validators.max(12)]],
      cvv: ["", [Validators.required,Validators.min(100),Validators.max(999)]],
    })
  }

  rent(save: boolean) {
    if (this.paymentFormGroup.valid) {

      let rentDto: RentDto = new RentDto()
      rentDto.rental = JSON.parse(this.localStorageService.get("rental"))
      rentDto.payment = Object.assign({}, this.paymentFormGroup.value)
      rentDto.payment.userId = this.authService.getCurrentUserId
      if (save) this.paymentService.save(rentDto.payment)

      this.rentalService.add(rentDto)

    }
    else {
      this.toastrService.error(FORM_IS_MISSING, ERROR)
    }
  }

  rentWithSavedCard(payment: Payment) {
    let rentDto: RentDto = new RentDto()
    rentDto.rental = JSON.parse(this.localStorageService.get("rental"))
    rentDto.payment = payment

    this.rentalService.add(rentDto)
    this.router.navigate(["cars"])
  }

  delete(){
    this.paymentService.delete(this.currentPayment)
  }

  isItSaved(cardNumber: string): boolean {
    let value = false
    this.payments.forEach(p => {
      if (p.cardNumber == cardNumber) {
        value = true
      }
    });
    return value
  }

  getByUserId() {
    let userId: number = this.authService.getCurrentUserId
    this.paymentService.getByUserId(userId).subscribe(response => {
      this.payments = response.data
      this.createPaymentFormGroup()
    })
  }

  setCurrentPayment(payment: Payment) {
    this.currentPayment = payment
  }

  loggedIn() {
    return this.authService.loggedIn
  }
}

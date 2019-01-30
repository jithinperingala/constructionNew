import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  headerText = {
    cardTitle: 'Payment',
    subTitle: 'Payment',
    path: 'accounts/Payment'
  }
  laborPayment=false
  ngOnInit() {

  }
  paymentTypeChanged(data) {
    console.log(data)
    if(data.value=="laborPayment"){
      this.laborPayment=true
    }else{
      this.laborPayment=false
    }
  }
}

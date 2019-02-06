import { Component, OnInit, ViewChild } from "@angular/core";
import { PaymentBlockComponent } from "./payment-block/payment-block.component";
import { LaborPaymentComponent } from "./labor-payment/labor-payment.component";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
  @ViewChild(PaymentBlockComponent) paymentBlock: PaymentBlockComponent;
  @ViewChild(LaborPaymentComponent) laborPaymentBlock: LaborPaymentComponent;
  constructor() {}
  headerText = {
    cardTitle: "Payment",
    subTitle: "Payment",
    path: "accounts/Payment"
  };
  laborPayment = false;
  ngOnInit() {}
  paymentTypeChanged(data) {
    console.log("dfsdf", data);
    if (data == "laborPayment") {
      this.laborPayment = true;
    } else {
      this.laborPayment = false;
    }
  }
  savePaymentDetails() {
    console.log(this.paymentBlock.getFormValues());
    console.log(this.laborPaymentBlock.getFormValues());
  }
}

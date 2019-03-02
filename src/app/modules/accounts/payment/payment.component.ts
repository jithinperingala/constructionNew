import { Component, OnInit, ViewChild } from "@angular/core";
import { PaymentBlockComponent } from "./payment-block/payment-block.component";
import { LaborPaymentComponent } from "./labor-payment/labor-payment.component";
import { PaymentService } from '../shared/payment.service';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
  providers: [DatePipe]
})
export class PaymentComponent implements OnInit {
  @ViewChild(PaymentBlockComponent) paymentBlock: PaymentBlockComponent;
  @ViewChild(LaborPaymentComponent) laborPaymentBlock: LaborPaymentComponent;

  constructor(private paymentService: PaymentService, private datePipe: DatePipe) { }
  headerText = {
    cardTitle: "Payment",
    subTitle: "Payment",
    path: "accounts/Payment"
  };
  laborPayment = false;

  ngOnInit() { }
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
    let Paymentobj = this.paymentBlock.getFormValues();
    Paymentobj['createUpdate'] = 0
    Paymentobj.payment.date = this.datePipe.transform(Paymentobj.payment.date, 'yyyy/MM/dd');
    this.paymentService.savePaymentDetails(Paymentobj).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}

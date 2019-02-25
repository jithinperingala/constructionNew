import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PaymentService } from '../shared/payment.service';

@Component({
  selector: "app-pettycashbook",
  templateUrl: "./pettycashbook.component.html",
  styleUrls: ["./pettycashbook.component.scss"]
})
export class PettycashbookComponent implements OnInit {
  pettyCashBook: FormGroup;
  constructor(private fb: FormBuilder, private paymentservice: PaymentService) { }
  headerText = {
    cardTitle: "pettycashbook",
    subTitle: "pettycashbook",
    path: "accounts/pettycashbook"
  };
  ngOnInit() {
    this.pettyCashBook = this.fb.group({
      siteId: ["", []],
      date: ["", []],
      fromId: ["", []],
      // cachTransferMode: ["Bank", []],
      amount: ["", []],
      description: ["", []]
    });
  }
  saveFormData(formData) {
    console.log(formData);
    this.paymentservice.savePettyCashBook(formData).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}

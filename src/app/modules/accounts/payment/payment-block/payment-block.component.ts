import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-payment-block",
  templateUrl: "./payment-block.component.html",
  styleUrls: ["./payment-block.component.scss"]
})
export class PaymentBlockComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  favoriteSeason: string;
  seasons: string[] = ["Bank", "cash", "check"];
  paymentBlock: FormGroup;
  @Output() typeChange = new EventEmitter();
  ngOnInit() {
    this.paymentBlock = this.fb.group({
      siteId: ["", []],
      date: ["", []],
      paymentType: ["", []],
      fromId: ["", []],
      toId: ["", []],
      cachTransferMode: ["Bank", []],
      bankId: ["", []],
      amount: ["", []],
      description: ["", []]
    });

    this.paymentBlock.valueChanges.subscribe(res => {
      this.typeChange.emit(res.paymentType);
    });
  }

  getFormValues() {
    return this.paymentBlock.value;
  }
}

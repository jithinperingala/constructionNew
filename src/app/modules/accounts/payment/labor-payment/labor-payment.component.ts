import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-labor-payment",
  templateUrl: "./labor-payment.component.html",
  styleUrls: ["./labor-payment.component.scss"]
})
export class LaborPaymentComponent implements OnInit {
  laborPaymentForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.laborPaymentForm = this.fb.group({
      payPerDay: ["", []],
      payPeroverTime: ["", []],
      additionalHours: ["", []]
    });
  }

  getFormValues() {
    return this.laborPaymentForm.value;
  }
}

import { Component, OnInit, Output, EventEmitter, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FromAccountDropdownComponent } from 'src/app/shared/components/from-account-dropdown/from-account-dropdown.component';
import { ToAccountDropdownComponent } from 'src/app/shared/components/to-account-dropdown/to-account-dropdown.component';

@Component({
  selector: "app-payment-block",
  templateUrl: "./payment-block.component.html",
  styleUrls: ["./payment-block.component.scss"]
})
export class PaymentBlockComponent implements OnInit {
  @ViewChild(FromAccountDropdownComponent) fromComponent: FromAccountDropdownComponent;
  @ViewChild(ToAccountDropdownComponent) toComponent: ToAccountDropdownComponent;
  constructor(private fb: FormBuilder) { }
  TransactionMode = [{ id: 0, type: "Bank" }, { id: 1, type: "cash" }, { id: 2, type: "check" }];
  paymentBlock: FormGroup;
  selectedSite

  @Output() typeChange = new EventEmitter();
  ngOnInit() {
    this.paymentBlock = this.fb.group({
      date: ["", [Validators.required]],
      paymentType: ["", [Validators.required]],
      cachTransferMode: ["Bank", [Validators.required]],
      amount: ["", [Validators.required]],
      description: ["", []],
    });

    this.paymentBlock.valueChanges.subscribe(res => {
      this.typeChange.emit(res.paymentType);
    });
  }
  selectedSiteDetails(val) {
    this.selectedSite = val.value
  }
  getFormValues() {
    console.log(this.paymentBlock.valid)
    if (this.paymentBlock.valid)
      return {
        siteId: this.selectedSite,
        payment: this.paymentBlock.value,
        from: this.fromComponent.getFormValues(),
        to: this.toComponent.getFormValues()
      };
    else {
      return "Form Invalid"
    }
  }
  clearForm() {
    this.paymentBlock.reset();
  }
}

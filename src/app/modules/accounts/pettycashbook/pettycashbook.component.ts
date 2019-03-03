import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PaymentService } from '../shared/payment.service';
import { FromAccountDropdownComponent } from 'src/app/shared/components/from-account-dropdown/from-account-dropdown.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-pettycashbook",
  templateUrl: "./pettycashbook.component.html",
  styleUrls: ["./pettycashbook.component.scss"],
  providers: [DatePipe]
})
export class PettycashbookComponent implements OnInit {
  pettyCashBook: FormGroup;
  selectedSite
  @ViewChild(FromAccountDropdownComponent) fromComponent: FromAccountDropdownComponent;
  constructor(private fb: FormBuilder, private paymentservice: PaymentService, private datePipe: DatePipe) { }
  headerText = {
    cardTitle: "pettycashbook",
    subTitle: "pettycashbook",
    path: "accounts/pettycashbook"
  };
  ngOnInit() {
    this.pettyCashBook = this.fb.group({
      date: ["", [Validators.required]],
      amount: ["", [Validators.required]],
      description: ["", []]
    });
  }
  selectedSiteDetails(val) {
    this.selectedSite = val.value
  }
  saveFormData(formData) {

    let fromObj = this.fromComponent.getFormValues()

    if (fromObj == "Form Invalid") {
      alert("Enter All Fildes")
    } else {
      let pettyobject = {
        siteId: this.selectedSite,
        payment: this.pettyCashBook.value,
        from: fromObj

      }
      pettyobject.payment.cachTransferMode = 1;
      pettyobject['payment'].date = this.datePipe.transform(pettyobject['payment'].date, 'yyyy/MM/dd');
      this.paymentservice.savePettyCashBook(pettyobject).subscribe(
        res => {
          console.log(res);
        }
      )
    }

  }
}

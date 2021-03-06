import { Component, OnInit, ViewChild } from "@angular/core";
import { DetailsGenericComponent } from "../details-generic/details-generic.component";
import { BankAccountsDetailsComponent } from "src/app/shared/components/bank-accounts-details/bank-accounts-details.component";
import { VendorService } from "../shared/vendor.service";
import { BankService } from 'src/app/shared/services/bank/bank.service';
import { NotifyService } from 'src/app/core/services/notification/notify.service';

@Component({
  selector: "app-supplier",
  templateUrl: "./supplier.component.html",
  styleUrls: ["./supplier.component.scss"]
})
export class SupplierComponent implements OnInit {
  headerText = {
    cardTitle: "Supplier",
    subTitle: "Supplier",
    path: "home/supplier"
  };
  @ViewChild(DetailsGenericComponent) generic: DetailsGenericComponent;
  @ViewChild(BankAccountsDetailsComponent)
  bankDetails: BankAccountsDetailsComponent;
  constructor(private vendorservice: VendorService, private NotifyService: NotifyService) { }

  ngOnInit() { }

  saveSupplierDetails() {
    // console.log(this.bankDetails);
    if (this.generic.getFormValues() != false) {
      this.vendorservice
        .saveSupplier(this.generic.getFormValues())
        .subscribe(res => {
          console.log("supppliersaved", res[0][0]['last_insert_id()']);
          this.bankDetails.saveBankDetails(res[0][0]['last_insert_id()'], 'S').subscribe(
            res => {
              console.log("resss", res)
              this.generic.clearFormData()
              this.bankDetails.clearBankDetails();
              this.bankDetails.clearBankData();
              this.NotifyService._sucessMessage();
            }
          )
        });
    } else {
      alert("Enter All Fields")
    }

  }
}

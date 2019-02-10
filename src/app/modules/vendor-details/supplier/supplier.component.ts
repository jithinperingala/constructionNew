import { Component, OnInit, ViewChild } from "@angular/core";
import { DetailsGenericComponent } from "../details-generic/details-generic.component";
import { BankAccountsDetailsComponent } from "src/app/shared/components/bank-accounts-details/bank-accounts-details.component";
import { VendorService } from "../shared/vendor.service";
import { BankService } from 'src/app/shared/services/bank/bank.service';

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
  constructor(private vendorservice: VendorService, private bankservice: BankService) { }

  ngOnInit() { }

  saveSupplierDetails() {
    // console.log(this.bankDetails);
    this.vendorservice
      .saveSupplier(this.generic.getFormValues())
      .subscribe(res => {
        console.log(res);
        this.bankservice.saveBankData(this.bankDetails.getFormValues()).subscribe(
          res => {
            console.log(res);
          }
        )
      });
  }
}

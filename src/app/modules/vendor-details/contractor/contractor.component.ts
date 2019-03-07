import { Component, OnInit, ViewChild } from "@angular/core";
import { DetailsGenericComponent } from "../details-generic/details-generic.component";
import { BankAccountsDetailsComponent } from "src/app/shared/components/bank-accounts-details/bank-accounts-details.component";
import { VendorService } from '../shared/vendor.service';
import { BankService } from 'src/app/shared/services/bank/bank.service';
import { NotifyService } from 'src/app/core/services/notification/notify.service';

@Component({
  selector: "app-contractor",
  templateUrl: "./contractor.component.html",
  styleUrls: ["./contractor.component.scss"]
})
export class ContractorComponent implements OnInit {
  headerText = {
    cardTitle: "Contractor",
    subTitle: "Contractor",
    path: "home/contractor"
  };
  @ViewChild(DetailsGenericComponent) genericComp: DetailsGenericComponent;
  @ViewChild(BankAccountsDetailsComponent)
  bankDetails: BankAccountsDetailsComponent;
  constructor(private vendorservice: VendorService, private bankservice: BankService, private NotifyService: NotifyService) { }
  ngOnInit() { }
  saveDataOnClick() {
    this.genericComp.getFormValues();
    this.bankDetails.getFormValues();
    if (this.genericComp.getFormValues() != false) {
      this.vendorservice
        .saveContractor(this.genericComp.getFormValues())
        .subscribe(res => {
          console.log("contractorDetails", res);
          this.bankDetails.saveBankDetails(res[0][0]['last_insert_id()'], 'C').subscribe(
            res => {
              console.log(res)
              this.genericComp.clearFormData()
              this.bankDetails.clearBankDetails();
              this.bankDetails.clearBankData();
              this.NotifyService._sucessMessage();
            }
          )
        });
    }
  }

}

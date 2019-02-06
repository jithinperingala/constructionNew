import { Component, OnInit, ViewChild } from "@angular/core";
import { DetailsGenericComponent } from "../details-generic/details-generic.component";
import { BankAccountsDetailsComponent } from "src/app/shared/components/bank-accounts-details/bank-accounts-details.component";

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
  constructor() {}
  ngOnInit() {}
  saveDataOnClick() {
    this.genericComp.getFormValues();
    this.bankDetails.getFormValues();
  }
}

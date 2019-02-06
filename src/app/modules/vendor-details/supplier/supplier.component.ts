import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailsGenericComponent } from '../details-generic/details-generic.component';
import { BankAccountsDetailsComponent } from 'src/app/shared/components/bank-accounts-details/bank-accounts-details.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
headerText=  {
  cardTitle:'Supplier',
  subTitle:'Supplier',
  path:'home/supplier'
}
@ViewChild(DetailsGenericComponent) generic: DetailsGenericComponent
@ViewChild(BankAccountsDetailsComponent) bankDetails:BankAccountsDetailsComponent
  constructor() { }

  ngOnInit() {
  }

  saveSupplierDetails(){
  console.log(this.bankDetails)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { BankService } from '../../services/bank/bank.service';
import * as _ from 'underscore'
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-bank-accounts-details',
  templateUrl: './bank-accounts-details.component.html',
  styleUrls: ['./bank-accounts-details.component.scss']
})
export class BankAccountsDetailsComponent implements OnInit {


  bankForm: FormGroup;
  BANK_DATA: Bank[] = [];
  bankAccountNo = 0
  constructor(private fb: FormBuilder, private BankService: BankService) {

  }

  ngOnInit() {
    this.bankForm = this.fb.group({
      name: ["", []],
      accNo: ["", []],
      branch: ["", []],
      ifsc: ["", []],
    })
  }
  addNewBank(data) {
    this.BANK_DATA.push({
      id: this.bankAccountNo++,
      name: data.name,
      accNo: data.accNo,
      branch: data.branch,
      ifsc: data.ifsc,
    })
    this.clearBankDetails()
  }
  clearBankDetails() {
    this.bankForm.reset();
  }
  removeBank(id) {
    this.BANK_DATA = _.reject(this.BANK_DATA, (res) => {
      return res.id == id
    })
  }
  getFormValues() {
    return this.BANK_DATA
  }
  saveBankDetails(id, code) {
    let bankObj = {
      createUpdate: 1,
      id: id,
      code: code,
      data: this.BANK_DATA
    }
    return this.BankService.saveBankData(bankObj).pipe(tap(res => { console.log(res) }))

  }

}
class Bank {
  id: number;
  name: string;
  accNo: string;
  branch: string;
  ifsc: string;
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { BankService } from '../../services/bank/bank.service';
import * as _ from 'underscore'
import { pipe, of } from 'rxjs';
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
      name: ["", [Validators.required]],
      accNo: ["", [Validators.required]],
      branch: ["", []],
      ifsc: ["", []],
    })
  }
  addNewBank(data) {
    if (this.bankForm.valid) {
      this.BANK_DATA.push({
        id: this.bankAccountNo++,
        name: data.name,
        accNo: data.accNo,
        branch: data.branch,
        ifsc: data.ifsc,
      })
      this.clearBankDetails()
    } else {
      alert("Enter all Bank Details")
    }

  }
  clearBankDetails() {
    this.bankForm.reset();
  }
  clearBankData() {
    this.BANK_DATA = []
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

    return this.BankService.saveBankData(bankObj)


  }

}
class Bank {
  id: number;
  name: string;
  accNo: string;
  branch: string;
  ifsc: string;
}

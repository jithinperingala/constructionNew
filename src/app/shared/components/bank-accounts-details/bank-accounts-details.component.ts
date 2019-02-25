import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { BankService } from '../../services/bank/bank.service';
@Component({
  selector: 'app-bank-accounts-details',
  templateUrl: './bank-accounts-details.component.html',
  styleUrls: ['./bank-accounts-details.component.scss']
})
export class BankAccountsDetailsComponent implements OnInit {


  bankForm: FormGroup;
  BANK_DATA: Bank[] = [];
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
      id: this.BANK_DATA.length + 1,
      name: data.name,
      accNo: data.accNo,
      branch: data.branch,
      ifsc: data.ifsc,
    })
  }
  removeBank(id) {
    this.BANK_DATA.splice(id - 1, 1)
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

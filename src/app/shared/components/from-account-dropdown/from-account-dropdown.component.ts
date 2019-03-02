import { Component, OnInit } from '@angular/core';
import { FromToService } from '../../services/accounts/from-to.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from-account-dropdown',
  templateUrl: './from-account-dropdown.component.html',
  styleUrls: ['./from-account-dropdown.component.scss']
})
export class FromAccountDropdownComponent implements OnInit {
  fromUsers
  accountsDetails
  fromForm: FormGroup;
  constructor(private fromService: FromToService, private fb: FormBuilder) { }

  ngOnInit() {
    this.fromForm = this.fb.group({
      from: ["", []],
      fromAccount: ["", []],
    });
    this.getFromEmployeeDetails()
    this.getFromUserAccounts()
  }
  getFormValues() {
    return this.fromForm.value
  }
  getFromEmployeeDetails() {
    this.fromService.getFromData(44).subscribe(
      res => {
        console.log(res)
        this.fromUsers = res[0]
      }
    )
  }
  getFromUserAccounts() {
    this.fromService.getAccountData(1, 'C').subscribe(
      res => {
        console.log(res)
        this.accountsDetails = res[0]
      }
    )
  }
}

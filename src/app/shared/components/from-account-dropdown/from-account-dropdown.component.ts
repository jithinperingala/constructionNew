import { Component, OnInit } from '@angular/core';
import { FromToService } from '../../services/accounts/from-to.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      from: ["", [Validators.required]],
      fromAccount: ["", [Validators.required]],
    });
    this.getFromEmployeeDetails()
  }
  getFormValues() {
    if (this.fromForm.invalid)
      return "Form Invalid"
    else
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
  getFromUserAccounts(dta) {
    this.fromService.getAccountData(dta.value, 'C').subscribe(
      res => {
        console.log(res)
        this.accountsDetails = res[0]
      }
    )
  }
}

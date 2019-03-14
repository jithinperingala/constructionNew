import { Component, OnInit, Input } from '@angular/core';
import { FromToService } from '../../services/accounts/from-to.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-from-account-dropdown',
  templateUrl: './from-account-dropdown.component.html',
  styleUrls: ['./from-account-dropdown.component.scss']
})
export class FromAccountDropdownComponent implements OnInit {
  fromUsers
  accountsDetails
  fromForm: FormGroup;
  constructor(private fromService: FromToService, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.fromForm = this.fb.group({
      from: ["", [Validators.required]],
      fromAccount: ["", [Validators.required]],
    });
    this.getFromEmployeeDetails()
  }
  @Input() selectedPaymentType
  getFormValues() {
    if (this.fromForm.invalid)
      return "Form Invalid"
    else
      return this.fromForm.value
  }
  getFromEmployeeDetails() {
    console.log("logg", this.userService.loggeduser)
    this.fromService.getFromData(this.userService.loggeduser).subscribe(
      res => {
        console.log(res)
        this.fromUsers = res[0]
      }
    )
  }
  getFromUserAccounts(dta) {
    this.fromService.getAccountData(dta.value, this.selectedPaymentType).subscribe(
      res => {
        console.log(res)
        this.accountsDetails = res[0]
      }
    )
  }
}

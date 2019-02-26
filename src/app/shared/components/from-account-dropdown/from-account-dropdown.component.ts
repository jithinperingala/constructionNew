import { Component, OnInit } from '@angular/core';
import { FromToService } from '../../services/accounts/from-to.service';

@Component({
  selector: 'app-from-account-dropdown',
  templateUrl: './from-account-dropdown.component.html',
  styleUrls: ['./from-account-dropdown.component.scss']
})
export class FromAccountDropdownComponent implements OnInit {
  fromUsers
  accountsDetails
  constructor(private fromService: FromToService) { }

  ngOnInit() {
    this.getFromEmployeeDetails()
    this.getFromUserAccounts()
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

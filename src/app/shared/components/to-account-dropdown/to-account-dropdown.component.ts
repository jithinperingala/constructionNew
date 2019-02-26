import { Component, OnInit } from '@angular/core';
import { FromToService } from '../../services/accounts/from-to.service';

@Component({
  selector: 'app-to-account-dropdown',
  templateUrl: './to-account-dropdown.component.html',
  styleUrls: ['./to-account-dropdown.component.scss']
})
export class ToAccountDropdownComponent implements OnInit {

  constructor(private fromService: FromToService) { }

  toUsers
  accountsDetails
  ngOnInit() {
    this.getToData();
    this.getFromUserAccounts();
  }
  getToData() {
    this.fromService.getToData(44, 'e').subscribe(
      res => {
        console.log(res)
        this.toUsers = res[0]
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

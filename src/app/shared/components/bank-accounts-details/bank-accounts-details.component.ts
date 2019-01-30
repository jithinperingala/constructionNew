import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-accounts-details',
  templateUrl: './bank-accounts-details.component.html',
  styleUrls: ['./bank-accounts-details.component.scss']
})
export class BankAccountsDetailsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','ifsc'];
  dataSource
  constructor() {
    this.dataSource = this.ELEMENT_DATA;
   }
  ELEMENT_DATA = [
    {position: 1, name: 'HDFC', weight: '98712367821309', symbol: 'kannur',ifsc:'HDFC1209'},
    {position: 2, name: 'ICICI', weight: '09723946897349', symbol: 'payannur',ifsc:'ICICI24'},
  ];
  ngOnInit() {
  }

}

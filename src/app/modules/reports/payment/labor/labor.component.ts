import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})
export class LaborComponent implements OnInit {
  ELEMENT_DATA = [
    {position: new Date(), name: 'Kannur', weight: "Tijo", symbol: "Ranju",amount:20000},
    {position: new Date(), name: 'Trivandrum', weight: "Raju", symbol: "Ranju",amount:70000},
    {position: new Date(), name: 'Trivandrum', weight: "Ranju", symbol: "Raju",amount:20000},
    {position: new Date(), name: 'Kannur', weight: "Tijo", symbol: "Raghu",amount:20000},
    {position: new Date(), name: 'Trivandrum', weight: "Ranju", symbol: "Raghu",amount:20000},
    {position: new Date(), name: 'Kannur', weight:"Ranju", symbol: "Raghu",amount:20000},
    {position: new Date(), name: 'Trivandrum', weight: "Tijo", symbol: "Raju",amount:5600},
    {position: new Date(), name: 'Kannur', weight: "Ranju", symbol:"Raghu",amount:5600},
    {position: new Date(), name: 'Trivandrum', weight: "Tijo", symbol: "Ranju",amount:3400},
    {position: new Date(), name: 'Trivandrum', weight: "Ranju", symbol: "Raju",amount:20000},
  ];
  displayedColumns = ['Date', 'particulars', 'credit', 'debit','amount','button'];
  dataSource = this.ELEMENT_DATA;
  constructor() { 
    
  }
  headerText=  {
    cardTitle:'labor Payment Details',
    subTitle:'labor',
    path:'home/labor'
  }
  
  ngOnInit() {
  }
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})
export class LaborComponent implements OnInit {
  ELEMENT_DATA = [
    {position: new Date(), name: 'Hydrogen', weight: 1.0079, symbol: 1.0079},
    {position: new Date(), name: 'Helium', weight: 4.0026, symbol: 1.0079},
    {position: new Date(), name: 'Lithium', weight: 6.941, symbol: 1.0079},
    {position: new Date(), name: 'Beryllium', weight: 9.0122, symbol: 1.0079},
    {position: new Date(), name: 'Boron', weight: 10.811, symbol: 1.0079},
    {position: new Date(), name: 'Carbon', weight: 12.0107, symbol: 1.0079},
    {position: new Date(), name: 'Nitrogen', weight: 14.0067, symbol: 1.0079},
    {position: new Date(), name: 'Oxygen', weight: 15.9994, symbol: 1.0079},
    {position: new Date(), name: 'Fluorine', weight: 18.9984, symbol: 1.0079},
    {position: new Date(), name: 'Neon', weight: 20.1797, symbol: 1.0079},
  ];
  displayedColumns = ['Date', 'particulars', 'credit', 'debit'];
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

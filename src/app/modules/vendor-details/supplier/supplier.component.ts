import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
headerText=  {
  cardTitle:'Supplier',
  subTitle:'Supplier',
  path:'home/supplier'
}
  constructor() { }

  ngOnInit() {
  }

}

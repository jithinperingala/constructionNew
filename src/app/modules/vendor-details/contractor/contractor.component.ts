import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailsGenericComponent } from '../details-generic/details-generic.component';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {
  headerText = {
    cardTitle: 'Contractor',
    subTitle: 'Contractor',
    path: 'home/contractor'
  }
  @ViewChild(DetailsGenericComponent) genericComp: DetailsGenericComponent;
  constructor() { }
  ngOnInit() {
  }
  saveDataOnClick() {
    this.genericComp.saveChanges()
  }
}

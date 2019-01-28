import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pettycashbook',
  templateUrl: './pettycashbook.component.html',
  styleUrls: ['./pettycashbook.component.scss']
})
export class PettycashbookComponent implements OnInit {

  constructor() { }
  headerText = {
    cardTitle: 'pettycashbook',
    subTitle: 'pettycashbook',
    path: 'accounts/pettycashbook'
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.scss']
})
export class PaymentBlockComponent implements OnInit {

  constructor() { }
  favoriteSeason: string;
  seasons: string[] = ['Bank', 'cache', 'check'];
 
  ngOnInit() {
    this.favoriteSeason="Bank"
  }

}

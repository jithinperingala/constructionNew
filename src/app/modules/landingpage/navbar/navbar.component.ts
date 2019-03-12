import { Component, OnInit } from '@angular/core';
let appConst = require('../../../core/constants/appConstants.json');
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appConstants = appConst
  constructor() {

  }

  ngOnInit() {
  }

}

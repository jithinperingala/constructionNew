import { Component, OnInit } from '@angular/core';
import { FromToService } from '../../services/accounts/from-to.service';

@Component({
  selector: 'app-to-account-dropdown',
  templateUrl: './to-account-dropdown.component.html',
  styleUrls: ['./to-account-dropdown.component.scss']
})
export class ToAccountDropdownComponent implements OnInit {

  constructor(private fromService: FromToService) { }


  ngOnInit() {
  }
  getToData() {
    this.fromService.getToData().subscribe(
      res => {
        console.log(res)
      }
    )
  }
}

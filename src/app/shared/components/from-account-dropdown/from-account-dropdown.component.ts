import { Component, OnInit } from '@angular/core';
import { FromToService } from '../../services/accounts/from-to.service';

@Component({
  selector: 'app-from-account-dropdown',
  templateUrl: './from-account-dropdown.component.html',
  styleUrls: ['./from-account-dropdown.component.scss']
})
export class FromAccountDropdownComponent implements OnInit {

  constructor(private fromService: FromToService) { }

  ngOnInit() {
  }
  getFromEmployeeDetails() {
    this.fromService.getFromData().subscribe(
      res => {
        console.log(res)
      }
    )
  }
}

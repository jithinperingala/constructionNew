import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FromToService } from '../../services/accounts/from-to.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-account-dropdown',
  templateUrl: './to-account-dropdown.component.html',
  styleUrls: ['./to-account-dropdown.component.scss']
})
export class ToAccountDropdownComponent implements OnInit, OnChanges {

  constructor(private fromService: FromToService, private fb: FormBuilder) { }

  toUsers
  accountsDetails
  toForm: FormGroup;

  ngOnInit() {
    this.toForm = this.fb.group({
      to: ["", [Validators.required]],
      toAccount: ["", []],
    });

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("change", changes)
    this.getToData();
  }
  @Input() selectedPaymentType
  getFormValues() {
    if (this.toForm.invalid)
      return "Form Invalid"
    else
      return this.toForm.value
  }
  getToData() {
    if (this.selectedPaymentType)
      this.fromService.getToData(44, this.selectedPaymentType).subscribe(
        res => {
          console.log(res)
          this.toUsers = res[0]
        }
      )
  }
  getFromUserAccounts(toId) {
    console.log(toId)
    this.fromService.getAccountData(toId.value, this.selectedPaymentType).subscribe(
      res => {
        console.log(res)
        this.accountsDetails = res[0]
      }
    )
  }
}

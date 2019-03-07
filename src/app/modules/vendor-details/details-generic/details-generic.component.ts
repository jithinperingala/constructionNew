import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-generic',
  templateUrl: './details-generic.component.html',
  styleUrls: ['./details-generic.component.scss']
})
export class DetailsGenericComponent implements OnInit {
  userForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'address': [''],
      'contactNo': [''],
      'mobile': ['', Validators.required],
      'email': [''],
      'contactPerson': ['']
    });
  }

  ngOnInit() {
  }
  getFormValues() {
    if (this.userForm.valid)
      return this.userForm.value
    else
      return false
  }
  clearFormData() {
    this.userForm.reset();
  }
}

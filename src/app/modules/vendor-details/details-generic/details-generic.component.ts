import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-generic',
  templateUrl: './details-generic.component.html',
  styleUrls: ['./details-generic.component.scss']
})
export class DetailsGenericComponent implements OnInit {
  userForm:FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'name': [''],
      'address': [''],
      'contactNo': [''],
      'mobile': [''],
      'email': [''],
      'contactPerson':['']
    });
   }

  ngOnInit() {
  }
  getFormValues(){
    return this.userForm.value
  }
}

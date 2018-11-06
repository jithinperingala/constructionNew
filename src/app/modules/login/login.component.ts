import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { LoginService } from './shared/login.service';
import { NotifyService } from '../../core/services/notification/notify.service';
import{Router}from'@angular/router'
import { SessionService } from 'src/app/core/services/session/session';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
     private loginService: LoginService, 
     private notifyservice: NotifyService,
     private router:Router,
     private sessionService:SessionService,
     private spinner: NgxSpinnerService) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      passCode: ['', [Validators.required]],

    });
  }

  validateUser(loginData) {
    this.loginService.validateUser(loginData).subscribe(
      result => {
        if (result) {
          this.sessionService.userInfo=result[0][0]
          this.spinner.show()
          this.router.navigate(['/dashbord/employee/search'])
        } else {
          this.notifyservice._loginFailed()
        }
      },
      err=>{
        this.notifyservice._loginFailed()
      }
    )
  }
}

import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivateChild {

  constructor(private userservice: UserService, private router: Router) { }
  canActivateChild() {
    if (this.userservice.loggeduser) {
      return true

    } else {
      this.router.navigate([''])
      return false
    }

  }
}

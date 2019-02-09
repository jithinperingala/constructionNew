import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class RouteguardService implements CanActivateChild {
  constructor(private userservice: UserService, private router: Router) {}
  canActivateChild() {
    console.log("this.userservice.loggeduser", this.userservice.loggeduser);
    if (
      this.userservice.loggeduser !== undefined ||
      this.userservice.loggeduser !== null
    ) {
      return true;
    } else {
      this.router.navigate([""]);
      return false;
    }
  }
}

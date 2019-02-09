import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private loggedUserID;
  constructor() {}
  set loggeduser(userid) {
    localStorage.setItem("usedData", userid);
    this.loggedUserID = userid;
  }
  get loggeduser() {
    if (this.loggedUserID !== undefined) {
      return this.loggedUserID;
    } else {
      return localStorage.getItem("usedData");
    }
  }
}

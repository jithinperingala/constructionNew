import { Injectable } from "@angular/core";
import { AjaxService } from "../../../core/services/ajax/ajax.service";
import { Pathgenerator } from "../../../core/services/ajax/pathgenerator";
import { tap } from "rxjs/operators";
import { UserService } from "src/app/shared/services/user/user.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private http: AjaxService,
    private pathGen: Pathgenerator,
    private userservice: UserService
  ) {}
  validateUser(userDetails) {
    return this.http._post(this.pathGen.validateuser, userDetails).pipe(
      tap(result => {
        if (result) {
          this.userservice.loggeduser = result[0][0]["FkEmployee"];
          console.log("asasd", result[0][0]["FkEmployee"]);
        }
      })
    );
  }
}

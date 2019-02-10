import { Injectable } from "@angular/core";
import { AjaxService } from "src/app/core/services/ajax/ajax.service";
import { Pathgenerator } from "src/app/core/services/ajax/pathgenerator";

@Injectable({
  providedIn: "root"
})
export class BankService {
  constructor(private http: AjaxService, private pathGen: Pathgenerator) { }
  saveBankData(data) {
    return this.http._post(this.pathGen.saveBankDetails, data);
  }
}

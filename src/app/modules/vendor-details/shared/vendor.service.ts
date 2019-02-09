import { Injectable } from "@angular/core";
import { AjaxService } from "src/app/core/services/ajax/ajax.service";
import { Pathgenerator } from "src/app/core/services/ajax/pathgenerator";

@Injectable({
  providedIn: "root"
})
export class VendorService {
  constructor(private http: AjaxService, private pathgen: Pathgenerator) {}

  saveSupplier(data) {
    data["createUpdate"] = 0;
    return this.http._post(this.pathgen.saveVendorDetails, data);
  }
}

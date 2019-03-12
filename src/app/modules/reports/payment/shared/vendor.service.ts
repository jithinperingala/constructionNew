import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/core/services/ajax/ajax.service';
import { Pathgenerator } from 'src/app/core/services/ajax/pathgenerator';
let appConst = require('../../../../core/constants/appConstants.json');
@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: AjaxService, private pathGen: Pathgenerator) { }
  getVendorReport(page) {
    if (page == appConst.supplier)
      return this.http._get(this.pathGen.Report_supplierAccounts)
    else
      return this.http._get(this.pathGen.Report_contractorAccounts)
  }
}

import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/core/services/ajax/ajax.service';
import { Pathgenerator } from 'src/app/core/services/ajax/pathgenerator';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: AjaxService, private pathGen: Pathgenerator) { }
  getcontractorReport() {
    return this.http._get(this.pathGen.Report_contractorAccounts)
  }
  getsupplierReport() {
    return this.http._get(this.pathGen.Report_supplierAccounts)
  }
}

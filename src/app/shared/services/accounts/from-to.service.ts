import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/core/services/ajax/ajax.service';
import { Pathgenerator } from 'src/app/core/services/ajax/pathgenerator';

@Injectable({
  providedIn: 'root'
})
export class FromToService {

  constructor(private http: AjaxService, private pathGen: Pathgenerator) { }
  getFromData(id) {
    return this.http._get(this.pathGen.getFromUser + '?id=' + id)
  }
  getToData(id, catogery) {
    return this.http._get(this.pathGen.getToUser + '?id=' + id + '&catogery=' + catogery)
  }
  getAccountData(id, catogery) {
    return this.http._get(this.pathGen.getAccountDetails + '?id=' + id + '&catogery=' + catogery)
  }
}

import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/core/services/ajax/ajax.service';
import { Pathgenerator } from 'src/app/core/services/ajax/pathgenerator';

@Injectable({
  providedIn: 'root'
})
export class SiteDetailsService {

  constructor(private http: AjaxService, private pathgen: Pathgenerator) { }
  getSiteDetails() {
    return this.http._get(this.pathgen.getSiteDetails);
  }
}

import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap, timeout } from "rxjs/operators";
import { NotifyService } from "../notification/notify.service";
import { Environment } from "../ajax/environment";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
@Injectable({
  providedIn: "root"
})
export class AjaxService {
  constructor(
    private http: HttpClient,
    private notifyService: NotifyService,
    private spinner: NgxSpinnerService
  ) { }

  _get(url: string): Observable<any> {
    this.spinner.show();
    return this.http
      .get(url)
      .pipe(
        tap(res => {
          this.spinner.hide();
        })
      )
      .pipe(
        catchError(error => {
          this.spinner.hide();
          if (error.status === 0) {
            this.notifyService._ajaxinternetConectivity();
          }

          return of(error);
        })
      );
  }
  _post(url: string, obj: object): Observable<any> {
    this.spinner.show();
    let self = this
    self.spinner.hide();
    return this.http
      .post(url, obj)
      .pipe(
        tap(res => {
          this.spinner.hide();
        })
      )
      .pipe(
        catchError(error => {
          this.spinner.hide();
          if (error.status === 0) {
            this.notifyService._ajaxinternetConectivity();
          }

          return of(error);
        })
      );
  }
}

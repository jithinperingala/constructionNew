import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  panelOpenState = false;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    setTheme('bs4'); // or 'bs4'
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

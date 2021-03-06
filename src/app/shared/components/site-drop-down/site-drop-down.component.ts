import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SiteDetailsService } from '../../services/site/site-details.service';

@Component({
  selector: 'app-site-drop-down',
  templateUrl: './site-drop-down.component.html',
  styleUrls: ['./site-drop-down.component.scss']
})
export class SiteDropDownComponent implements OnInit {

  siteData
  workSites
  workSite
  @Output() getSite = new EventEmitter;
  constructor(private siteDetailsService: SiteDetailsService) {
    this.siteData = this.siteDetailsService.getSiteDetails()
    this.siteData.subscribe(res => {

      this.workSites = res[0]
      this.workSite = 1
    })

  }

  selectionChanged(val) {
    this.getSite.emit(val)
  }
  ngOnInit() {
  }

}

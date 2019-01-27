import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-details-generic',
  templateUrl: './details-generic.component.html',
  styleUrls: ['./details-generic.component.scss']
})
export class DetailsGenericComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
   
  }
  saveChanges(){
    alert()
  }
}

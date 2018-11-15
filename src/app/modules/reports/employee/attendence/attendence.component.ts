import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {

  constructor() {
  }
  fromDate = new FormControl(new Date());
  toDate = new FormControl(new Date());
  ngOnInit() {

  }
  getCompleteAttendence(){

  }
  getSitewiseAttendence(){
    
  }
}

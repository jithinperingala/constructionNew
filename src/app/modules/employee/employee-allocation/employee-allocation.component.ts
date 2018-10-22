import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import * as _ from 'underscore'
@Component({
  selector: 'app-employee-allocation',
  templateUrl: './employee-allocation.component.html',
  styleUrls: ['./employee-allocation.component.scss']
})
export class EmployeeAllocationComponent implements OnInit {
  workSites = []
  searchdata
  workSite
  searchKey
  tempWorksite
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    //Get site Details


    //get employee based on site
    this.employeeService.getSiteDetails().subscribe(res => {
      console.log("app-emp-reg", res)
      if (res) {
        this.workSites = res[0]
        this.workSites.push({ SiteId: 0, SiteName: "Unallocated" })
        this.workSite = 1
      }

    })
  }
  setToallocateData() {



  }
  //allocate employee
  getallocatedEmployee() {
    // this.tempWorksite = JSON.stringify(this.workSites)
    // this.tempWorksite =JSON.parse(this.tempWorksite)
    // let selectedindex = _.indexOf(_.pluck(this.tempWorksite, 'SiteId'), this.workSite)
    // if (selectedindex != -1)
    // this.tempWorksite= this.tempWorksite.splice(1,selectedindex)
    // console.log("tempWorksite", selectedindex)

    this.searchKey = this.searchKey ? this.searchKey : ' '
    this.employeeService.getallocatedEmployes(this.workSite, this.searchKey).subscribe(res => {
      if (res != null)
        this.searchdata = res[0]
      console.log("searchdata", this.searchdata)

    })
  }
  removeAllocation() {
    this.employeeService.removeAllocation()
  }
}

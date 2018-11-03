import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import * as _ from 'underscore'
import { SessionService } from 'src/app/core/services/session/session';
import { FormControl } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employee-allocation',
  templateUrl: './employee-allocation.component.html',
  styleUrls: ['./employee-allocation.component.scss'],
  providers: [DatePipe]
})
export class EmployeeAllocationComponent implements OnInit {
  workSites = []
  searchdata
  workSite
  searchKey
  tempWorksite
  modelData = {}
  date = new FormControl(new Date());
  displayedColumns: string[] = ['EmployeeCode', 'FirstName', 'employee_type_name', 'allocateTo', 'removeAllocation'];
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(private employeeService: EmployeeService,
    private session: SessionService,
    private datePipe: DatePipe
  ) { }
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    //Get site Details
    //get employee based on site
    this.employeeService.getSiteDetails().subscribe(res => {
      console.log("app-emp-reg", res)
      if (res) {
        this.tempWorksite = JSON.parse(JSON.stringify(res[0]))
        this.workSites = res[0]
        this.workSites.push({ SiteId: 0, SiteName: "Unallocated" })
        this.workSite = 1
        this.getallocatedEmployee()
      }

    })
  }
  saveAllocation(employee) {
    console.log("employee", employee)
    let dataToSend = {
      selectedSite: this.modelData[employee.EmployeeID],
      employeeID: employee.EmployeeID,
      allocatedDate: this.datePipe.transform(this.serializedDate.value, 'yyyy-MM-dd'),
      userId: this.session.userInfo['FkEmployee']
    }



    this.employeeService.saveAllocation(dataToSend).subscribe(
      (res) => {

        this.removeUserData(employee)

      }
    )

  }
  removeUserData(employee) {

    this.searchdata.data = _.filter(this.searchdata.data, (data) => {
      return data.EmployeeCode != employee.EmployeeCode
    });
  }
  //allocate employee
  getallocatedEmployee() {
    this.searchKey = this.searchKey ? this.searchKey : ' '
    this.employeeService.getallocatedEmployes(this.workSite, this.searchKey).subscribe(res => {
      if (res != null)
        this.searchdata = new MatTableDataSource(res[0])
      this.searchdata.sort = this.sort;
      console.log("searchdata", this.searchdata)

    })
  }
  removeAllocation(employee) {
    let dataToSend = {
      employeeID: employee.EmployeeID,
      allocatedDate: this.datePipe.transform(this.serializedDate.value, 'yyyy-MM-dd'),
      userId: this.session.userInfo['FkEmployee']
    }

    this.employeeService.removeAllocation(dataToSend).subscribe(
      (res) => {

        this.removeUserData(employee)
      }
    )
  }
}

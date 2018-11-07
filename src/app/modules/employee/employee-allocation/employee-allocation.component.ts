import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import * as _ from 'underscore'
import { SessionService } from 'src/app/core/services/session/session';
import { FormControl } from '@angular/forms';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';
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
  tempWorksite=[]

  date = new FormControl(new Date());
  displayedColumns: string[] = ['EmployeeCode', 'FirstName', 'employee_type_name', 'allocateTo', 'removeAllocation'];
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(private employeeService: EmployeeService,
    private session: SessionService,
    private datePipe: DatePipe,
    public dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;
  openDialog(employee): void {
    console.log(employee)
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: '250px',
      data: { name: employee.FirstName, id: employee.EmployeeID,process:'Remove' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.removeAllocation(employee)
        console.log(result);
      }
      
    });
  }
  DeleteEmployee(result: any): any {
    throw new Error("Method not implemented.");
  }
  ngOnInit() {
    //Get site Details
    //get employee based on site
    this.employeeService.getSiteDetails().subscribe(res => {
      console.log("app-emp-reg", res)
      if (res) {
        Object.assign(this.tempWorksite, res[0])
        this.workSites = res[0]
        this.workSites.push({ SiteId: 0, SiteName: "Unallocated" })
        this.workSite = 1
        this.getallocatedEmployee()
        this.setAllocationSite()
      }

    })
  }
  saveAllocation(employee,eve) {
    console.log("employee", eve.value)
    let dataToSend = {
      selectedSite: eve.value,
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
  setAllocationSite(){
    let self=this
    Object.assign(this.tempWorksite, this.workSites)
    this.tempWorksite=_.reject(this.tempWorksite, function(site){ return site.SiteId ==self.workSite || site.SiteId== 0; })
       
  }
  getallocatedEmployee() {
    this.setAllocationSite()
    this.searchKey = this.searchKey ? this.searchKey : ''
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

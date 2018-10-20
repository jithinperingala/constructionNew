import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';

@Component({
  selector: 'app-employee-allocation',
  templateUrl: './employee-allocation.component.html',
  styleUrls: ['./employee-allocation.component.scss']
})
export class EmployeeAllocationComponent implements OnInit {
  workSites
  searchdata
  workSite
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    //Get site Details
    this.employeeService.getEmployeeBysearchKey(" ").subscribe(res => {
      if (res != null)
        this.searchdata = res[0]
      console.log("")

    })

    //get employee based on site
    this.employeeService.getSiteDetails().subscribe(res => {
      console.log("app-emp-reg", res)
      if (res)
        this.workSites = res[0]
    })
  }

  //allocate employee
  allocateEmployee() {
    this.employeeService.employeeAllocation()
  }
  removeAllocation() {
    this.employeeService.removeAllocation()
  }
}

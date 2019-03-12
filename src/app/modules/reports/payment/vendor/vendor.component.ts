import { Component, OnInit } from '@angular/core';
import { VendorService } from '../shared/vendor.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  appHead
  headerText
  ELEMENT_DATA = [
    { position: new Date(), name: 'Neon', weight: 20.1797, symbol: 1.0079 },
  ];
  displayedColumns = ['Date', 'From', 'To', 'Mode', 'Amount', 'Remark'];
  dataSource = this.ELEMENT_DATA;
  constructor(private vendorservice: VendorService, private activatedRoute: ActivatedRoute) {

  }



  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.appHead = this.activatedRoute.snapshot.params['id']
      this.headerText = {
        cardTitle: this.appHead + ' Payment Details',
        subTitle: this.appHead,
        path: 'home/' + this.appHead
      }
      this.vendorservice.getVendorReport(this.appHead).subscribe(
        res => {
          console.log("res", res[0])
          this.dataSource = res[0]
          // res[0].map(item => {
          //   console.log("item", item)
          //   this.ELEMENT_DATA.push(res[0][0])
          // })
        }
      )
    })

    // this.vendorservice.getsupplierReport().subscribe(
    //   res => {
    //     console.log(res)
    //   }
    // )
  }

}

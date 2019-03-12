import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MeterialModule } from 'src/app/shared/modules/meterial/meterial.module';

@NgModule({
  imports: [
    CommonModule,
    LandingpageRoutingModule,
    MeterialModule
  ],
  declarations: [LandingpageComponent, NavbarComponent, FooterComponent
  ]
})
export class LandingpageModule { }

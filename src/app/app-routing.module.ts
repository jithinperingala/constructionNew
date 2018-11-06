import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RouteguardService } from './shared/services/user/routeguard.service';
const mainRoute: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'dashbord', loadChildren: 'src/app/modules/landingpage/landingpage.module#LandingpageModule',
    canActivateChild: [RouteguardService]
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: '**', redirectTo: 'login' }]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(mainRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

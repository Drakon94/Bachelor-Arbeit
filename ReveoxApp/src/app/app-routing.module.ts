import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RidesDetailViewComponent} from "./rides-detail-view/rides-detail-view.component";
import {RidesTableViewComponent} from "./rides-table-view/rides-table-view.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ImpressumComponent} from "./impressum/impressum.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rides', component: RidesTableViewComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'impressum', component: ImpressumComponent},
  { path: 'ride/:id', component: RidesDetailViewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

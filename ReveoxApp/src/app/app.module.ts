import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RidesTableViewComponent } from './rides-table-view/rides-table-view.component';
import { RidesDetailViewComponent } from './rides-detail-view/rides-detail-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './/app-routing.module';
import { RidesService } from "./services/rides.service";


@NgModule({
  declarations: [
    AppComponent,
    RidesTableViewComponent,
    RidesDetailViewComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ImpressumComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

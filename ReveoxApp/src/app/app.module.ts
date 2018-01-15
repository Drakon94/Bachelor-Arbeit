import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RidesTableViewComponent } from "./rides-table-view/rides-table-view.component";
import { RidesDetailViewComponent } from "./rides-detail-view/rides-detail-view.component";
import { NavbarComponent } from './navbar/navbar.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './footer/footer.component';

import { RidesService } from "./services/rides.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./mock-data/in-memory-data.service";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RidesTableViewComponent,
    RidesDetailViewComponent,
    NavbarComponent,
    ImpressumComponent,
    AboutUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    CdkTableModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [RidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

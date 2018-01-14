import { Component, OnInit } from '@angular/core';
import { RidesService } from "../services/rides.service";
import { Ride } from "../models/ride";
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-rides-table-view',
  templateUrl: './rides-table-view.component.html',
  styleUrls: ['./rides-table-view.component.scss']
})
export class RidesTableViewComponent implements OnInit {

  rides: Ride[];
  displayedColumns = ['from', 'to', 'provider', 'booking'];
  dataSource: MatTableDataSource<Ride>;

  constructor(private ridesService: RidesService) { }

  ngOnInit() {
    this.getRides();
  }

  getRides(): void {
    this.ridesService.getRides().subscribe(rides => {
      this.rides = rides;
      this.dataSource = new MatTableDataSource<Ride>(this.rides);
    } );
  }

}

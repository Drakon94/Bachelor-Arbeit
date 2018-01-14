import {Component, OnInit, ViewChild } from '@angular/core';
import { RidesService } from "../services/rides.service";
import { Ride } from "../models/ride";
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-rides-table-view',
  templateUrl: './rides-table-view.component.html',
  styleUrls: ['./rides-table-view.component.scss']
})
export class RidesTableViewComponent implements OnInit {

  rides: Ride[];
  displayedColumns = ['from', 'to', 'provider', 'booking'];
  dataSource: MatTableDataSource<Ride>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ridesService: RidesService) { }

  ngOnInit() {
    this.ridesService.getRides().subscribe(rides => {
      this.rides = rides;
      this.dataSource = new MatTableDataSource<Ride>(this.rides);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getRides(): void {

  }

}

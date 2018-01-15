import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RidesService} from "../services/rides.service";
import {Ride} from "../models/ride";
import {Location} from "@angular/common";

@Component({
  selector: 'app-rides-detail-view',
  templateUrl: './rides-detail-view.component.html',
  styleUrls: ['./rides-detail-view.component.scss']
})
export class RidesDetailViewComponent implements OnInit {


  @Input() ride: Ride;

  constructor(
    private route: ActivatedRoute,
    private accountService: RidesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAccount()
  }

  getAccount(): void {
    let id: number;
    this.route.params.subscribe((params) => {
      id = +params['id'];
      this.accountService.getRide(id).subscribe(ride => this.ride = ride);
    });
  }

  goBack(): void {
    this.location.back();
  }

}

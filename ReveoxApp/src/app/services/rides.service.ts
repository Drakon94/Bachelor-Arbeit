import { Injectable } from '@angular/core';
import { Ride } from "../models/ride";
import { RIDES } from "../mock-data/mock-rides";

@Injectable()
export class RidesService {

  constructor() { }

  getRides(): Ride[] {
    return RIDES;
  }

}

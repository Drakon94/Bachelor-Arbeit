import { Injectable } from '@angular/core';
import { Ride } from "../models/ride";
import { RIDES } from "../mock-data/mock-rides";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class RidesService {

  constructor() { }

  getRides(): Observable<Ride[]> {
    return of(RIDES);
  }

}

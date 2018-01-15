import { Injectable } from '@angular/core';
import { Ride } from "../models/ride";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class RidesService {

  constructor(private http: HttpClient) { }

  private ridesUrl = 'api/rides';

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.ridesUrl)
  }

}

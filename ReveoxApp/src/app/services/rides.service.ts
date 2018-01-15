import { Injectable } from '@angular/core';
import { Ride } from "../models/ride";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map, tap} from "rxjs/operators";

@Injectable()
export class RidesService {

  constructor(private http: HttpClient) { }

  private ridesUrl = 'api/rides';

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.ridesUrl)
  }

  /** GET hero by id. Will 404 if id not found */
  getRide(id: number): Observable<Ride> {
    const url = `${this.ridesUrl}/${id}`;
    return this.http.get<Ride>(url);
  }

}

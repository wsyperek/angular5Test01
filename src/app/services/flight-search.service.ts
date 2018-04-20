import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlightSearchService {

  constructor(private httpClient: HttpClient) { }
  find(from: string, to: string): Observable<Flight[]> {
    console.info("Suche gestartet....");
    let url = 'http://www.angular.at/api/flight';

    let params = new HttpParams()
      .set('from', from)
      .set('to', to);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this
      .httpClient
      .get<Flight[]>(url, { headers, params });
  }
}

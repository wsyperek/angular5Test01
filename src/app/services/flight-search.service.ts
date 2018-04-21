import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlightSearchService {

  findById(id: string): Observable<Flight> {
    let params = new HttpParams().set('id', id);

    let headers = new HttpHeaders().set('Accept', 'application/json');
    return this.httpClient.get<Flight>(this.url, { headers, params });
  }

  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://www.angular.at/api/flight';
  }
  find(from: string, to: string): Observable<Flight[]> {
    console.info("Suche gestartet....");


    let params = new HttpParams()
      .set('from', from)
      .set('to', to);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this
      .httpClient
      .get<Flight[]>(this.url, { headers, params });
  }
}

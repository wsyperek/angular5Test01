import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = "Hamburg";
  to: string = "Graz";
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor(private httpClient: HttpClient) {


  }
  search(): void {

    let url = 'http://www.angular.at/api/flight';

    let params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.httpClient.get<Flight[]>(url, { params, headers }).subscribe(
      (flights) => { this.flights = flights; },
      (err) => { console.error('Error loading flights', err); }
    );
  }
  
  ngOnInit() {
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }

}

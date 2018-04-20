import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClientTestingBackend } from '@angular/common/http/testing/src/backend';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightSearchService } from '../services/flight-search.service';


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

  constructor(private flightService: FlightSearchService) {
    // for (let i1: number = 0; i1 < 10; i1++) {
    //   this.basket[i1] = true;
    // }

  }
  search(): void {
    this.flightService.find(this.from, this.to).subscribe(
      (flights) => {
        // console.info("Daten erhalten!!!");
        // console.info(flights.length);
        this.flights = flights;
      },
      (err) => {
        console.error('Error loading flights', err);
      }
    );
  }

  ngOnInit() {
  }

  select(f: Flight) {
    this.basket[f.id] = true;
  }

  unselect(f: Flight) {
    this.basket[f.id] = false;
  }

  basket: Map<number, boolean> = new Map<number, boolean>();

  public date: string = (new Date().toISOString());
}

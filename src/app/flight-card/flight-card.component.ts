import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {

  constructor() { }

  @Input() item: Flight;
  @Input() selected: boolean;

  ngOnInit() {
  }

  select(){
    this.selected = !this.selected;
  }
}

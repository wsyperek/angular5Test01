import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Flight } from '../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {

  constructor() { console.debug('Constructor ', this.item); }

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    console.debug('ngOnInit', this.item);
  }

  ngOnChanges(changes) {
    console.debug('ngOnChanges', this.item);

    if (changes.item) {
      console.debug('ngOnChanges: item');
    }

    if (changes.selected) {
      console.debug('ngOnChanges: selected');
    }
  }

  select() {
    // console.debug("Select() hit")

    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-component',
  templateUrl: './date-component.component.html',
  styleUrls: ['./date-component.component.css']
})
export class DateComponentComponent implements OnInit {

  @Input() date: string;
  @Output() dateChange = new EventEmitter<string>();
  constructor() { }

  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;

  ngOnInit() {
  }

  ngOnChanges(change) {
    let date = new Date(this.date);
    this.day = date.getDay();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
  }

  apply() {
    let date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
    console.debug('apply() date:', date.toISOString());

    this.dateChange.emit(date.toISOString());
  }
}

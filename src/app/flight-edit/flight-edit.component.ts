import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { ActivatedRoute } from '@angular/router';
import { FlightSearchService } from '../services/flight-search.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  id: string;
  flight: Flight;

  constructor(private route: ActivatedRoute, private flightService: FlightSearchService) { }
  save(){
    console.info("Jetzt sollte eigentlich gespeichert weden...noch nicht implementiert.");
  };
  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];

      this.flightService.findById(this.id).subscribe(
        x => this.flight = x,
        error => console.error('Fehler beim Laden eines Fluges per ID', error)
      )
    });
  };

  

  
}

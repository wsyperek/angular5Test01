import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from '../flight-search/flight-search.component';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { DateComponentComponent } from '../date-component/date-component.component';
import { FlightSearchService } from '../services/flight-search.service';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    CommonModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    DateComponentComponent
  ],
  providers:[
    FlightSearchService
  ],
  exports:[
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }

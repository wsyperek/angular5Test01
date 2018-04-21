import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from '../flight-search/flight-search.component';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { DateComponentComponent } from '../date-component/date-component.component';
import { FlightSearchService } from '../services/flight-search.service';
import { FlightBookingRoutesModule } from './flight-booking-router-module';
import { PassengerComponent } from '../passenger/passenger.component';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from '../flight-edit/flight-edit.component';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    FlightBookingRoutesModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    DateComponentComponent,
    PassengerComponent,
    FlightBookingComponent
  ],
  providers:[
    FlightSearchService
  ],
  exports:[
    // FlightSearchComponent
  ]
})
export class FlightBookingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { DateComponentComponent } from './date-component/date-component.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { FlightCityPipe } from './flight-city.pipe';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // FlightBookingModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES
      , {
        // enableTracing: true ,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

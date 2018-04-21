import { Routes, RouterModule } from "@angular/router";
import { FlightSearchComponent } from "../flight-search/flight-search.component";
import { PassengerComponent } from "../passenger/passenger.component";
import { FlightBookingComponent } from "./flight-booking.component";
import { FlightEditComponent } from "../flight-edit/flight-edit.component";

const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-booking',
        component: FlightBookingComponent,
        children: [
            {
                path: '',
                redirectTo: 'flight-search',
                pathMatch: 'full'
            },
            {
                path: 'flight-search',
                component: FlightSearchComponent

            },
            {
                path: 'passenger-search',
                component: PassengerComponent
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent
            }
        ]
    }
];

export const FlightBookingRoutesModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
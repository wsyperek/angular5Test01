import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { PassengerComponent } from './passenger/passenger.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path: 'app-flight-search',
    //     component: FlightSearchComponent
    // },
    // {
    //     path: 'app-passenger',
    //     component: PassengerComponent
    // },
    {
        path: "**",
        component: HomeComponent
    }

];
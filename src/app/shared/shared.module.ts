import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCityPipe } from '../flight-city.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FlightCityPipe,
  ],
  exports:[
    FlightCityPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }

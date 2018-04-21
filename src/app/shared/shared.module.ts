import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCityPipe } from '../flight-city.pipe';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth-service';
import { SimpleAuthService } from '../services/simple-auth-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FlightCityPipe,
  ],
  exports: [
    FlightCityPipe,
    CommonModule,
    FormsModule
  ],
  providers: [
    // { provide: AuthService, useClass: SimpleAuthService }
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      providers: [
        { provide: AuthService, useClass: SimpleAuthService }
      ],
      ngModule: SharedModule
    };
  }
}

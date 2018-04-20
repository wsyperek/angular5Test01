import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightCity'
})
export class FlightCityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let short, long;

    switch (value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Aiport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      default:
        short = long = 'Rom';
    }
    if(args == 'long'){
      return long;
    }
    return short;
  }

}

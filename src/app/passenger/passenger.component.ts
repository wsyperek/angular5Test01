import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  name: string;
  constructor(private authService: AuthService) {
    this.name = this.authService.userName;
  }
  search(): void {
    console.debug("Hier kommt dann irgendwann die Passagiersuche nach: " + this.name);
  }
  ngOnInit() {
  }

}

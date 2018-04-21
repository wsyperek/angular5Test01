import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {
    console.debug('ctor Home');

  }
  login() { this.authService.login(); }
  logout() { this.authService.logout(); }
  get userName() {
    return this.authService.userName;
  }
  ngOnInit() {
  }

}

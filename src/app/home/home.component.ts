import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(event) {
    event.preventDefault();
    this.AuthService.login();
    this.router.navigate(['/servers']);
    return true;
  }

  onLogout(event) {
    event.preventDefault();
    this.AuthService.logout();
    this.router.navigate(['/']);
    return true;
  }

}

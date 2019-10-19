import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  jwtToken = '';
  role = '';

  constructor() { }

  ngOnInit() {
    this.jwtToken = sessionStorage.getItem('jwtToken');
    this.role = sessionStorage.getItem('role');
  }

  logOut() {
    sessionStorage.setItem('jwtToken', '');
    sessionStorage.setItem('role', '');
    sessionStorage.setItem('accountId', '');
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = "";
  constructor(private api:ApiService) { }

  ngOnInit() {
  }
 logout(){
   this.api.Logout();
 }
 isLoggedin() {
  this.name = localStorage.getItem('name');
  return this.api.isLoggedIn();
}
}
//
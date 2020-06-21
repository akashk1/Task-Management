import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private api:ApiService) { 
   
  }

  ngOnInit() {
    this.api.Logout();
 
    this.router.navigate(['/signin']);
  }

}

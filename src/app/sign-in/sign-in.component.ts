import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  success;
  clicked;
  errorText;
  constructor(private apiService:ApiService, private router: Router) { }
  loggedIn = false;
  ngOnInit() {
    if (this.apiService.isLoggedIn()) {
      this.router.navigate(['/list']);
    }
  }
  onSubmit(user) {
    this.apiService.signin(user).subscribe(
      res => {
       
       const data1 = JSON.stringify(res);
        const data = JSON.parse(data1);
        //console.log(data.email);
        //console.log(data);
        this.apiService.userName = data.userName;
        this.apiService.email = JSON.stringify(data.email);
        //console.log(this.apiService.email);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('email', data.email);
        localStorage.setItem('name', data.userName);
        this.router.navigateByUrl('/list');
        this.loggedIn = true;
        //console.log('logged In');
          },
          error => {
            //console.log(error);
            this.success = false;
            this.errorText = "Login Credentials are wrong";
            this.clicked = true;
          }
    );
  
    }
    close() {
      this.clicked  = false;
      this.success = false;
    }
  
}
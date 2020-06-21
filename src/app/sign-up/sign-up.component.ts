import { Component, OnInit } from '@angular/core';
import {  ApiService } from '../api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  success;
  clicked;
  errorText;
  constructor(private api:ApiService) { }

  ngOnInit() {
  }
  onSubmit(user) {
    this.api.registerUser(user).subscribe(res =>    {
      const result = JSON.parse(JSON.stringify(res));
        this.success = result.success;
        this.clicked = true;
        if (this.success) {
    this.errorText = 'Successfully Signed up!!';
        } else {
          this.errorText = ' Email is already registered' ;
        }
      });
  // console.log(user);
  }
  close() {
    this.clicked  = false;
    this.success = false;
  }
}

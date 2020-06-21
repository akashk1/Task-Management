import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  toDos:any = [];
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
    if(!this.api.isLoggedIn()){
      this.router.navigate(['/signin']);
    }
     this.api.getAllArchived().subscribe(res => {
       this.toDos = res;
       console.log(this.toDos.length);
     })
  }

}

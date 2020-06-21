import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { List } from 'src/List';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loggedIn = false;
   email = '';
   userName = '';
   list:any = [];

  constructor(private http: HttpClient) { }
  registerUser(user) {
    console.log(user);
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post('api/register',user,{headers:headers}).pipe(tap(res => res));
   }
  signin(data){
    this.loggedIn = true;
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post('api/signin',data,{headers:headers}).pipe(tap(res => res));

  }
  Logout() {
    localStorage.clear();
  }
  isLoggedIn() {
    //console.log(localStorage.getItem('token'));
    return localStorage.getItem('token') !== null;
  }
  addTask(data){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    console.log(data);
    return this.http.post('task/addTask',data,{headers:headers}).pipe(tap(res=>res));
  }
  getAllTasks(){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post('task/getAll',{id:localStorage.getItem('userId')},{headers:headers}).pipe(tap(res=>res));
  }
  updateTask(data){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post('task/updateTask',data,{headers:headers}).pipe(tap(res=>res));
  }
  deleteTask(id){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post('task/deleteTask',{_id:id},{headers:headers}).pipe(tap(res=>res));
  }
  addToArchive(data){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post('archive/addTask',data, {headers:headers}).pipe(tap(res => res));
  }
  getAllArchived(){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post('archive/getAll',{id:localStorage.getItem('userId')}, {headers:headers}).pipe(tap(res => res));
  }
}
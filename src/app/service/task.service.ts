import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService<Task> {
url="http://localhost:3000/tasks";
  constructor( public http : HttpClient,public router : Router) { }

  get(): Observable<Task>{
    return this.http.get<Task>(this.url)
  }
  getById(id: any): Observable<Task> {
    return this.http.get<Task>(this.url + `/${id}`)
  }
  create(obj: any): Observable<Task> {
    return this.http.post<Task>(this.url, obj)
  }
  update(id: any, obj: Task): Observable<Task> {
    return this.http.put<Task>(this.url + `/${id}`, obj)
  }
  delet(id: any) {
    return this.http.delete(this.url + `/${id}`)
  }


  auth(){
    if(localStorage.getItem("admin")){

    }else{
      this.router.navigateByUrl("/login/user/admin")
    }
  }
}

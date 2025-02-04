import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { courses } from '../model/courses';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService<type> {

  //  private base_url = "http://localhost:3000/courses";
  constructor(@Inject(String) public base_url: string, public http: HttpClient, public router: Router) { }


  get(): Observable<type> {
    return this.http.get<type>(this.base_url);
  }
  getById(id: any) {
    return this.http.get<courses>(`${this.base_url}/${id}`);
  }
  create(model: type): Observable<type> {
    return this.http.post<type>(this.base_url, model);
  }

  update(id: any, model: type): Observable<type> {
    return this.http.put<type>(`${this.base_url}/${id}`, model)
  }
  delete(id: any): Observable<type> {
    return this.http.delete<type>(`${this.base_url}/${id}`)
  }


  auth() {
    if (!localStorage.getItem("admin")) {
      this.router.navigateByUrl("admin/login");
    }
  }
}

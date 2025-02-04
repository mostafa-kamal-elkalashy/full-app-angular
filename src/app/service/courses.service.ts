import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { courses } from '../model/courses';
import { Observable } from 'rxjs';
import { ApiFunctionService } from './api-function.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends ApiFunctionService<courses> {

  constructor(public override http: HttpClient, public override router: Router) {
    super("http://localhost:3000/courses", http, router);
  }

}

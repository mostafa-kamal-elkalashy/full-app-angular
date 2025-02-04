import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { user } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiFunctionService<user> {

  constructor(public override http: HttpClient, public override router: Router) {
    super("http://localhost:3000/user", http, router);
  }
}

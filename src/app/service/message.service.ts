import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends ApiFunctionService<message>{

  constructor(public override http:HttpClient, public override router:Router) {
    super("http://localhost:3000/message", http , router);
  }
}

import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends ApiFunctionService <EventsService> {

  constructor( public override http:HttpClient , public override router:Router,) {
    super( "http://localhost:3000/events", http, router );
  }
}

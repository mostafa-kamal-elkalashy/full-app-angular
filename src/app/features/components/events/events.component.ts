import { EventsService } from './../../../service/events.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  allData!:any[];
  constructor( private EventsService:EventsService){
    this.EventsService.get().subscribe((data:any)=>{
      this.allData=data;

    })
  }
}

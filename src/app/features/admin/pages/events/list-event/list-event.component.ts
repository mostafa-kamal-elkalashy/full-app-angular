import { EventsService } from './../../../../../service/events.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../../../../service/user.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-event',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
 allData!:any[];
  constructor( private EventsService:EventsService , private toast:ToastrService , private user:UsersService){
    this.showdata();
    this.user.auth();
  }
  showdata(){
    this.EventsService.get().subscribe((data:any)=>{
      this.allData=data;
    })
  }
  deletCourse(id:any){
    this.EventsService.delete(id).subscribe((data)=>{
      this.toast.error("delete row seccessfully");
      this.showdata();
    });
  }
}

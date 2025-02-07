
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CoursesService } from '../../../../../service/courses.service';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from '../../../../../service/events.service';


@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,ReactiveFormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
constructor(private df:FormBuilder,private serv:EventsService,private toaster:ToastrService , private router:Router){
    this.createForm();
    this.serv.auth();
  }
  eventForm!:FormGroup;
  createForm(){
      this. eventForm=this.df.group({
      title:['',[Validators.required , Validators.minLength(5)]],
      date:['',[Validators.required ]],
      decription:['',[Validators.required , Validators.minLength(5)]],
      img:['',[Validators.required]]
    })
  }
  get formcontrols(){
    return this. eventForm.controls;
  }

  submit(){
   this.serv.create(this. eventForm.value).subscribe((data:any)=>{
   this.toaster.success("insert event successfully")
    this.router.navigateByUrl("/admin/le")
   })

  }

}



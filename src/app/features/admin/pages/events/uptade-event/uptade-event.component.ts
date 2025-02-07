import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule,} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router, RouterLink,RouterLinkActive } from '@angular/router';
import { EventsService } from '../../../../../service/events.service';

@Component({
  selector: 'app-uptade-event',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,ReactiveFormsModule],
  templateUrl: './uptade-event.component.html',
  styleUrl: './uptade-event.component.css'
})
export class UptadeEventComponent {
id!:any;
  constructor(private df:FormBuilder,private serv:EventsService,private toaster:ToastrService , private router:Router, private ActivatedRoute:ActivatedRoute){
    this.createForm();
    this.id=this.ActivatedRoute.snapshot.paramMap.get("id");
    this.serv.getById(this.id).subscribe((data)=>{
      console.log(data);
      this.eventForm.patchValue(data);
    })

  }
  eventForm!:FormGroup;
  createForm(){
      this. eventForm=this.df.group({
      title:['',[Validators.required , Validators.minLength(5)]],
      date:['',[Validators.required , Validators.minLength(5)]],
      decription:['',[Validators.required , Validators.minLength(5)]],
      img:['',[Validators.required]],
    })
  }
  get formcontrols(){
    return this. eventForm.controls;
  }

  submit(){
   this.serv.update( this.id,this.eventForm.value).subscribe((data:any)=>{
   this.toaster.success("update event successfully")
    this.router.navigateByUrl("/admin/le")
   })

  }

}




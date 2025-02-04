
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CoursesService } from '../../../../../service/courses.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creat-courses',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,ReactiveFormsModule],
  templateUrl: './creat-courses.component.html',
  styleUrl: './creat-courses.component.css'
})
export class CreatCoursesComponent {
  constructor(private df:FormBuilder,private serv:CoursesService,private toaster:ToastrService , private router:Router){
    this.createForm();
    this.serv.auth();
  }
  courseForm!:FormGroup;
  createForm(){
      this.courseForm=this.df.group({
      title:['',[Validators.required , Validators.minLength(5)]],
      debertment:['',[Validators.required , Validators.minLength(5)]],
      descreption:['',[Validators.required , Validators.minLength(5)]],
      img:['',[Validators.required]],
      price:['',[Validators.required , Validators.minLength(5)]],
      instractor:['',[Validators.required , Validators.minLength(5)]]
    })
  }
  get formcontrols(){
    return this.courseForm.controls;
  }

  submit(){
   this.serv.create(this.courseForm.value).subscribe((data:any)=>{
   this.toaster.success("insert course successfully")
    this.router.navigateByUrl("/admin/lc")
   })

  }

}

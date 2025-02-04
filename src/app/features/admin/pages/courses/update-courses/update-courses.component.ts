import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule,} from '@angular/forms';
import { CoursesService } from '../../../../../service/courses.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router, RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-update-courses',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink , RouterLinkActive],
  templateUrl: './update-courses.component.html',
  styleUrl: './update-courses.component.css'
})
export class UpdateCoursesComponent {
  id!:any;
  constructor(private df:FormBuilder,private serv:CoursesService,private toaster:ToastrService , private router:Router, private ActivatedRoute:ActivatedRoute){
    this.createForm();
    this.id=this.ActivatedRoute.snapshot.paramMap.get("id");
    this.serv.getById(this.id).subscribe((data)=>{
      console.log(data);
      this.courseForm.patchValue(data);
    })

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
   this.serv.update( this.id,this.courseForm.value).subscribe((data:any)=>{
   this.toaster.success("update course successfully")
    this.router.navigateByUrl("/admin/lc")
   })

  }

}



import { Component } from '@angular/core';
import { CoursesService } from '../../../../../service/courses.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../../../../service/user.service';

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export class ListCoursesComponent {
  allData!:any[];
  constructor( private CoursesService:CoursesService , private toast:ToastrService , private user:UsersService){
    this.showdata();
    this.user.auth();
  }
  showdata(){
    this.CoursesService.get().subscribe((data:any)=>{
      this.allData=data;
    })
  }
  deletCourse(id:any){
    this.CoursesService.delete(id).subscribe((data)=>{
      this.toast.error("delete row seccessfully");
      this.showdata();
    });
  }
}

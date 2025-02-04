import { CoursesService } from './../../../service/courses.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
 allData!:any[];
  constructor( private CoursesService:CoursesService){
    this.CoursesService.get().subscribe((data:any)=>{
      this.allData=data;

    })
  }
}

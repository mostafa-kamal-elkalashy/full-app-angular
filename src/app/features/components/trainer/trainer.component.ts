import { TrainersService } from '../../../service/trainer.service';
import { trainer } from './../../../model/trainer';
import { CoursesService } from './../../../service/courses.service';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.css'
})
export class TrainerComponent {
allData: any;
constructor( private trainer:TrainersService){
this.trainer.get().subscribe((data:any)=>{
  this.allData=data;

})
}
}

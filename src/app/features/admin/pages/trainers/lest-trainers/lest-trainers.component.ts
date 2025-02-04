import { ToastrService } from 'ngx-toastr';
import { TrainersService } from '../../../../../service/trainer.service';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-lest-trainers',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './lest-trainers.component.html',
  styleUrl: './lest-trainers.component.css'
})
export class LestTrainersComponent {
allData!:any[];
  constructor( private trainerService:TrainersService, private toast:ToastrService){
    this.showdata();
    this.trainerService.auth();
  }
  showdata(){
    this.trainerService.get().subscribe((data:any)=>{
      this.allData=data;
    })
  }
  deletTrainer(id:any){
    this.trainerService.delete(id).subscribe((data)=>{
      this.toast.error("delete row seccessfully");
      this.showdata();
    });
  }
}

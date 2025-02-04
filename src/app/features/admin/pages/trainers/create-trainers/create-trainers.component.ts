import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrainersService } from '../../../../../service/trainer.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-create-trainers',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,ReactiveFormsModule],
  templateUrl: './create-trainers.component.html',
  styleUrl: './create-trainers.component.css'
})
export class CreateTrainersComponent {
constructor(private df:FormBuilder,private serv:TrainersService,private toaster:ToastrService , private router:Router){
    this.createForm();
    this.serv.auth();
  }
  trainerForm!:FormGroup;
  createForm(){
      this.trainerForm=this.df.group({
      debertment:['',[Validators.required , Validators.minLength(5)]],
      descreption:['',[Validators.required , Validators.minLength(5)]],
      img:['',[Validators.required]],
      name:['',[Validators.required , Validators.minLength(5)]]
    })
  }
  get formcontrols(){
    return this.trainerForm.controls;
  }

  submit(){
   this.serv.create(this.trainerForm.value).subscribe((data:any)=>{
   this.toaster.success("insert trainer successfully")
    this.router.navigateByUrl("/admin/lt")
   })

  }

}


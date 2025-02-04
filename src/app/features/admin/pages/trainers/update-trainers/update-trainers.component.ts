import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TrainersService } from '../../../../../service/trainer.service';

@Component({
  selector: 'app-update-trainers',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './update-trainers.component.html',
  styleUrl: './update-trainers.component.css'
})
export class UpdateTrainersComponent {
id!: any;

constructor(private df:FormBuilder,private serv:TrainersService,private toaster:ToastrService , private router:Router , private ActivatedRoute:ActivatedRoute){
    this.createForm();
    this.id=this.ActivatedRoute.snapshot.paramMap.get("id");
    this.serv.getById(this.id).subscribe((data)=>{
      this.trainerForm.patchValue(data);
    })
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
   this.serv.update( this.id,this.trainerForm.value).subscribe((data:any)=>{
   this.toaster.success("update trainer successfully")
    this.router.navigateByUrl("/admin/lt")
   })

  }

}




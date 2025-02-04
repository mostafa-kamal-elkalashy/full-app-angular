import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../../../../service/user.service';

@Component({
  selector: 'app-registers',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink , RouterLinkActive],
  templateUrl: './registers.component.html',
  styleUrl: './registers.component.css'
})
export class RegistersComponent {
constructor(private df:FormBuilder,private serv:UsersService,private toaster:ToastrService , private router:Router){
    this.createForm();
  }
  registerForm!:FormGroup;
  createForm(){
      this.registerForm=this.df.group({
      name:['',[Validators.required , Validators.minLength(5)]],
      email:['',[Validators.required , Validators.minLength(5)]],
      password:['',[Validators.required]]
    })
  }
  get formcontrols(){
    return this.registerForm.controls;
  }

  submit(){
   this.serv.create(this.registerForm.value).subscribe((data:any)=>{
    this.toaster.success("success", "Register Account Successfully", {
      timeOut: 2000,
      closeButton: true,
      positionClass: "toast-top-center",
    });
    this.router.navigateByUrl("/admin/login");
   })

  }

}



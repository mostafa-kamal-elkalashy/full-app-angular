import { user } from './../../../../model/user';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../../../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
userEmail!:string;
userPassword!:string;

constructor(private toaster:ToastrService ,private serv:UsersService, private router:Router){}

  submit(){
    this.serv.get().subscribe((data:any)=>{
      let user=data.find((userData:any)=>{
        return ((userData.email == this.userEmail )||(userData.password == this.userPassword)) ;
      });

      if(user){
        this.router.navigateByUrl("admin/home");
        this.toaster.success("login successfully");
        localStorage.setItem("admin",user);
      }else{
         this.toaster.error("wrong in passward or email");
       }
    })
  }
}

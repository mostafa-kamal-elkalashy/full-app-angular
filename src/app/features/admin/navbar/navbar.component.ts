import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  Auth!:any;

  logout(){
    localStorage.removeItem('admin');
    this.Router.navigateByUrl("/admin/login")
  }

  constructor(private Router:Router){
    if(localStorage.getItem("admin")){
      this.Auth = true;
    }else{
      localStorage.removeItem('admin');
      this.Auth = false;
    }
  }


}

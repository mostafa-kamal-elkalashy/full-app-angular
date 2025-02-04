import { Component } from '@angular/core';
import { UsersService } from '../../../service/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private user:UsersService){
this.user.auth();
}
}

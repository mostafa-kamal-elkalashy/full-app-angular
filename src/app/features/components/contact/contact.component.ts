import { message } from './../../../model/message';
import { routes } from './../../../app.routes';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowser } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from '../../../service/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule ,FormsModule , ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
constructor(private Router:Router , private serv:MessageService  , private toster:ToastrService){}
formdata ={
name: "",
email: "",
supject: "",
message:""
}
messageForm!:FormGroup;
send(){
this.serv.create(this.messageForm.value).subscribe((data)=>{
  this.toster.success("sent message successfully");
})
}
}

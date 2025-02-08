import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './features/shared/navbar/navbar.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbDropdownModule,RouterOutlet ,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'start-app';
  constructor() {
  }
}

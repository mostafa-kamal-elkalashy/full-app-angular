import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  constructor(private SpinnerService:NgxSpinnerService) {}
  busy(){
    this.SpinnerService.show();
  }
  hide(){
    this.SpinnerService.hide();
  }

}

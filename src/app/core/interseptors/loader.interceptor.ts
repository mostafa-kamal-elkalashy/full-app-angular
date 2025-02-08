import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BusyService } from '../service/busy.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const busyservice = inject(BusyService);
  busyservice.busy();
  return next(req).pipe(
    finalize(()=>{
      busyservice.hide();
    })
  )
};

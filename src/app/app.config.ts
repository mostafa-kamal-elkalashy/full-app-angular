import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideToastr} from "ngx-toastr"
import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { loaderInterceptor } from './core/interseptors/loader.interceptor';

export const appConfig: ApplicationConfig = {

  providers: [
    provideHttpClient(
      withInterceptors([loaderInterceptor])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideToastr(),
    provideAnimations(),
    importProvidersFrom(BrowserAnimationsModule)
  ]
};

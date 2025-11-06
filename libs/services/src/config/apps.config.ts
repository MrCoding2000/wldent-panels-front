import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,} from '@angular/core';
import {provideHttpClient} from "@angular/common/http";
import {register} from 'swiper/element/bundle';
import {DialogService} from "primeng/dynamicdialog";
import {provideAnimations} from "@angular/platform-browser/animations";

register();
export const sharedAppsConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(),
    provideAnimations(),
    DialogService,
    // provideHttpClient(
    //   withInterceptors([HttpInterceptor, ErrorHandlerInterceptor])
    // ),
  ],
};

//TODO: INTERCEPTOR COMMENTED FOR TRANSLATE

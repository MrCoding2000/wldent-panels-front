import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {CORE_CONFIG} from "@waldent-panels-front/services";
import {UserConfig} from "./project.config";
import {register} from 'swiper/element/bundle';
import {DialogService} from "primeng/dynamicdialog";
import {provideAnimations} from "@angular/platform-browser/animations";

register();
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
    DialogService,
    {provide: CORE_CONFIG, useValue: UserConfig},
    provideRouter(appRoutes,
      withComponentInputBinding()
    )
    // provideHttpClient(
    //   withInterceptors([HttpInterceptor, ErrorHandlerInterceptor])
    // ),
  ],
};

//TODO: INTERCEPTOR COMMENTED FOR TRANSLATE

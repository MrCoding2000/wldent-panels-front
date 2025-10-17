import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {CORE_CONFIG, ErrorHandlerInterceptor, HttpInterceptor} from "@waldent-panels-front/services";
import {UserConfig} from "./project.config";
import { register } from 'swiper/element/bundle';

register();
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(appRoutes),
    provideHttpClient(),
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

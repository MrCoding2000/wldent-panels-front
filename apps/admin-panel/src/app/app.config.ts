import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,} from '@angular/core';
import {provideRouter} from '@angular/router';
import {appRoutes} from './app.routes';
import {CORE_CONFIG, ErrorHandlerInterceptor, HttpInterceptor} from "@waldent-panels-front/services";
import {AdminConfig} from "./project.config";
import {provideHttpClient, withInterceptors} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(appRoutes),
    {provide: CORE_CONFIG, useValue: AdminConfig},
    provideHttpClient(
      withInterceptors([HttpInterceptor, ErrorHandlerInterceptor])
    ),
  ],
};

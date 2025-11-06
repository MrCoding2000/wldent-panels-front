import {ApplicationConfig, mergeApplicationConfig,} from '@angular/core';
import {provideRouter} from '@angular/router';
import {appRoutes} from './app.routes';
import {CORE_CONFIG, sharedAppsConfig} from "@waldent-panels-front/services";
import {AdminConfig} from "./project.config";

export const appConfig: ApplicationConfig = mergeApplicationConfig(sharedAppsConfig, {
  providers: [
    provideRouter(appRoutes),
    {provide: CORE_CONFIG, useValue: AdminConfig},
  ],
})

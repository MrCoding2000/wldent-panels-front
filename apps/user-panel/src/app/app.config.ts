import {ApplicationConfig, mergeApplicationConfig,} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {appRoutes} from './app.routes';
import {CORE_CONFIG} from "@waldent-panels-front/services";
import {UserConfig} from "./project.config";
import {register} from 'swiper/element/bundle';
import {sharedAppsConfig} from "@waldent-panels-front/services";

register();
export const appConfig: ApplicationConfig = mergeApplicationConfig(sharedAppsConfig, {

  providers: [
    provideRouter(appRoutes),
    {provide: CORE_CONFIG, useValue: UserConfig},
    provideRouter(appRoutes,
      withComponentInputBinding()
    )
  ],
})

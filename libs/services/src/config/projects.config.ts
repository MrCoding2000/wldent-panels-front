import { InjectionToken } from '@angular/core';
import {ConfigModel} from "@waldent-panels-front/models";

export const CORE_CONFIG: InjectionToken<ConfigModel> = new InjectionToken<ConfigModel>('CORE_CONFIG');

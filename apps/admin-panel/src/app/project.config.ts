import { InjectionToken } from '@angular/core';
import {ConfigModel} from "@waldent-panels-front/models";

export const CORE_CONFIG = new InjectionToken<ConfigModel>('CORE_CONFIG');

export const AdminConfig: ConfigModel = {
  API_URL: 'https://admin-api.example.com',
  TOKEN_KEY: 'access_token',
  CACHE_TTL: 3,
  STORAGE_KEYS: {
    user: 'user_data',
    token: 'access_token',
  },
};

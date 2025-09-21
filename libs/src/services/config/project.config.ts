import {ConfigModel} from './model/config.model';

export const ProjectConfig: ConfigModel = {
  API_URL: 'https://',
  TOKEN_KEY: 'access_token',
  CACHE_TTL: 3, // minutes
  STORAGE_KEYS: {
    user: 'user_data',
    token: 'access_token',
  },
};

export interface ConfigModel {
  API_URL: string,
  TOKEN_KEY: string,
  CACHE_TTL: number,
  STORAGE_KEYS: {
    user: string,
    token: string,
  },
}

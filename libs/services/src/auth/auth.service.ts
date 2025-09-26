// src/app/features/auth/services/auth.service.ts
import {computed, Injectable, signal} from '@angular/core';
import {map, Observable} from "rxjs";
import {ApiService} from "../api/api.service";

@Injectable({providedIn: 'root'})
export class AuthService {
  private _accessToken = signal<string | null>(localStorage.getItem('access_token'));
  private _refreshToken = signal<string | null>(localStorage.getItem('refresh_token'));

  isLoggedIn = computed(() => !!this._accessToken());

  constructor(private apiService: ApiService) {
  }

  get accessToken() {
    return this._accessToken();
  }

  setTokens(access: string, refresh: string) {
    this._accessToken.set(access);
    this._refreshToken.set(refresh);
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
  }

  clearTokens() {
    this._accessToken.set(null);
    this._refreshToken.set(null);
    localStorage.clear();
  }

  get refreshToken() {
    return this._refreshToken();
  }

  refreshTokenFn(): Observable<string> {
    return this.apiService.post<{ access_token: string }>('/auth/refresh', {token: this.refreshToken})
      .pipe(map(res => res.access_token));
  }
}

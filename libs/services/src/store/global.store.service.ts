import { Injectable, computed, effect, signal } from '@angular/core';
import {CacheService} from "@waldent-panels-front/services";

@Injectable({ providedIn: 'root' })
export class GlobalStoreService {
  // TODO
  constructor(private cache: CacheService) {}

  get user() {
    return this.cache.getSignal<any>('user');
  }

  //
  get theme() {
    return this.cache.getSignal<'light' | 'dark' | 'system'>('theme');
  }

  get settings() {
    return this.cache.getSignal<any>('app_settings');
  }


  get permissions() {
    return this.cache.getSignal<any[]>('permissions');
  }

  readonly isAdmin = computed(() => {
    const user = this.user();
    return !!user && user.roles?.includes('admin');
  });

  initReactivity() {
    effect(() => {
      const theme = this.theme() as string;
      document.body.setAttribute('data-theme', theme); // auto-switch UI
    });

    effect(() => {
      const user = this.user();
      if (user) {

      }
    });
  }
}

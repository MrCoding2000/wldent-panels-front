import {Inject, Injectable, PLATFORM_ID, signal, Signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {ProjectConfig} from "../config/project.config";

interface CacheEntry<T> {
  value: Signal<T | null>;
  expiresAt: number;
}

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  //TODO: private config = inject<ConfigModel>(CORE_CONFIG);
  private ttl = ProjectConfig.CACHE_TTL * 60 * 1000;
  readonly isBrowser: boolean;
  private cache = new Map<string, CacheEntry<any>>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.loadFromLocalStorage();
    this.cleanupExpired();
  }

  private now() {
    return Date.now();
  }

  /**
   *
   */
  set<T>(key: string, data: T, persist = false, ttlOverride?: number): void {
    const ttl = ttlOverride ? ttlOverride * 60 * 1000 : this.ttl;
    const expiresAt = this.now() + ttl;
    const reactive = signal<T | null>(data);

    this.cache.set(key, {value: reactive, expiresAt});
    if (persist && this.isBrowser) {
      localStorage.setItem(
        key,
        JSON.stringify({data, expiresAt})
      );
    }
  }

  /**
   *
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (this.now() > entry.expiresAt) {
      this.remove(key);
      return null;
    }
    return entry.value();
  }

  /**
   *
   */
  getSignal<T>(key: string): Signal<T | null> {
    const entry = this.cache.get(key);
    if (!entry) {
      const emptySignal = signal<T | null>(null);
      this.cache.set(key, {value: emptySignal, expiresAt: 0});
      return emptySignal;
    }

    if (this.now() > entry.expiresAt) {
      this.remove(key);
      return signal<T | null>(null);
    }

    return entry.value;
  }

  /**
   *
   */
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  /**
   *
   */
  remove(key: string): void {
    this.cache.delete(key);
    if (this.isBrowser) localStorage.removeItem(key);
  }

  /**
   *
   */
  clear(): void {
    this.cache.clear();
    localStorage.clear();
  }

  /**
   * LocalStorage
   */
  private loadFromLocalStorage(): void {
    if (this.isBrowser) {
      Object.keys(localStorage).forEach((key) => {
        const raw = localStorage.getItem(key);
        if (!raw) return;
        try {
          const {data, expiresAt} = JSON.parse(raw);
          if (this.now() < expiresAt) {
            this.cache.set(key, {value: signal(data), expiresAt});
          } else {
            localStorage.removeItem(key);
          }
        } catch {
          // ignore malformed entries
        }
      });
    }
  }

  /**
   *
   */
  private cleanupExpired(): void {
    this.cache.forEach((entry, key) => {
      if (this.now() > entry.expiresAt) {
        this.remove(key);
      }
    });
  }
}

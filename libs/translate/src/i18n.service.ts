import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, catchError, forkJoin, Observable, of} from 'rxjs';

export type Language = 'en' | 'fa';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private currentLang = new BehaviorSubject<Language>('fa');
  private translations: Record<string, any> = {};

  constructor(private http: HttpClient) {
  }

  /**
   * Set Language
   * @param lang 'en' | 'fa'
   * @param app
   */
  setLanguage(lang: Language, app: 'user-panel' | 'admin-panel') {
    this.loadTranslations(lang, app);
    if (this.currentLang.value === lang) return;
    this.currentLang.next(lang);
  }


  /**
   * Get Language
   */
  getLanguage(): Observable<Language> {
    return this.currentLang.asObservable();
  }

  /**
   * Translate
   */
  translate(key: string): string {
    return this.getNestedTranslation(this.translations, key) || key;
  }

  /**
   * Load Translations
   */
  private loadTranslations(lang: Language, app: 'user-panel' | 'admin-panel') {
    const sharedPath: string = `assets/i18n/shared/${lang}.json`;
    const appPath: string = `assets/i18n/${app}/${lang}.json`;

    forkJoin({
      shared: this.http.get<Record<string, string>>(sharedPath).pipe(
        catchError((err) => {
          console.warn(`i18n: shared translation not found: ${sharedPath}`);
          return of({});
        })
      ),
      app: this.http.get<Record<string, string>>(appPath).pipe(
        catchError((err) => {
          console.warn(`i18n: app translation not found: ${appPath}`);
          return of({});
        })
      ),
    }).subscribe(({shared, app}) => {
      this.translations = {...shared, ...app};
    });
  }

  getNestedTranslation(obj: any, key: string): string | null {
    return key.split('.').reduce((acc, key) => {
      return (acc && acc[key] !== undefined) ? acc[key] : null;
    }, obj);
  }

}

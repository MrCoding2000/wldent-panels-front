import {Injectable, signal, WritableSignal} from '@angular/core';
import {ApiService} from "@waldent-panels-front/services";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  isMobileSize = window.innerWidth < 1024;
  #headerPageTitle: WritableSignal<string> = signal('');
  #isSideBarCollapsed: WritableSignal<boolean> = signal(false);

  constructor(private apiService: ApiService) {
  }

  // getters
  headerPageTitle = this.#headerPageTitle;
  isSideBarCollapsed = this.#isSideBarCollapsed;

  // setters
  setHeaderPageTitle(title: string) {
    this.headerPageTitle.set(title);
  }


  // Update
  updateSideBarOpenClosedStatus() {
    this.isSideBarCollapsed.update(isSideBarCollapsed => !isSideBarCollapsed);
  }
}

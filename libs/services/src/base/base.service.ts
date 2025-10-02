import {Injectable, signal, WritableSignal} from '@angular/core';
import {ApiService} from "@waldent-panels-front/services";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  #headerPageTitle: WritableSignal<string> = signal('');
  #isSideBarOpen: WritableSignal<boolean> = signal(false);

  constructor(private apiService: ApiService) {
  }

  // getters
  headerPageTitle = this.#headerPageTitle;
  isSideBarOpen = this.#isSideBarOpen;

  // setters
  setHeaderPageTitle(title: string) {
    this.headerPageTitle.set(title);
  }


  // Update
  updateSideBarOpenClosedStatus() {
    this.isSideBarOpen.update(isSideBarOpen => !isSideBarOpen);
  }
}

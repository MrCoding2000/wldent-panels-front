import {Injectable, signal, Type, WritableSignal} from '@angular/core';
import {ApiService} from "@waldent-panels-front/services";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  isMobileSize = window.innerWidth < 1024;

  #headerPageTitle: WritableSignal<string> = signal('');
  #isSideBarCollapsed: WritableSignal<boolean> = signal(false);

  constructor(private apiService: ApiService, private dialogService: DialogService) {
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

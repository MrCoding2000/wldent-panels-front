import { Injectable } from '@angular/core';
import {ApiService} from "@waldent-panels-front/services";
import {Observable} from "rxjs";
import {SidebarModel} from "@waldent-panels-front/models";

@Injectable({
  providedIn: 'root'
})
export class AdminBaseService {
  constructor(private apiService: ApiService) {
  }

  sidebarData(): Observable<SidebarModel[]> {
    return this.apiService.get<SidebarModel[]>('assets/mock/sidebar/sidebar.json');
  }
}

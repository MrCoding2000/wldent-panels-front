import { Injectable } from '@angular/core';
import {ApiService} from "@waldent-panels-front/services";
import {Observable} from "rxjs";
import {AdvertisementCardModel} from "@waldent-panels-front/models";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private apiService: ApiService) {
  }

  advertisementCardsData(): Observable<AdvertisementCardModel[]> {
    return this.apiService.get('assets/mock/dashboard/advertisement-card.json');
  }

  receivedOrdersStatusCardsData(): Observable<AdvertisementCardModel[]> {
    return this.apiService.get('assets/mock/dashboard/advertisement-card.json');
  }
}

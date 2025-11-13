import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AdvertisementCardModel, NewAdvertisementRequest, OptionalCardsDataModel} from "@waldent-panels-front/models";
import {ApiService} from "@waldent-panels-front/services";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  constructor(private apiService: ApiService) {
  }

  advertisementCardsData(): Observable<AdvertisementCardModel[]> {
    return this.apiService.get<AdvertisementCardModel[]>('assets/mock/dashboard/advertisement-card.json');
  }

  advertisementNewRequestCardsData(): Observable<OptionalCardsDataModel<NewAdvertisementRequest>[]> {
    return this.apiService.get<OptionalCardsDataModel<NewAdvertisementRequest>[]>('assets/mock/advertisement/new-advertisement-request-data.json')
  }
}

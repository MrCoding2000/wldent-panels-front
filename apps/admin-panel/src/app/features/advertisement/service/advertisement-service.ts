import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AdvertisementCardModel} from "@waldent-panels-front/models";
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
}

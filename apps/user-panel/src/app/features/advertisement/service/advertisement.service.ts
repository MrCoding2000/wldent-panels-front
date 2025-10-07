import {Injectable} from '@angular/core';
import {ApiService} from "@waldent-panels-front/services";
import {Observable} from "rxjs";
import {OptionalCardsDataModel} from "@waldent-panels-front/models";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  constructor(private apiService: ApiService) {
  }

  advertisementRejectCardsData(): Observable<OptionalCardsDataModel[]> {
    return this.apiService.get<OptionalCardsDataModel[]>('assets/mock/advertisement/reject-advertisement-data.json')
  }
}

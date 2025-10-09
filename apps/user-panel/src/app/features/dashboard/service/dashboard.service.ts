import { Injectable } from '@angular/core';
import {ApiService} from "@waldent-panels-front/services";
import {Observable} from "rxjs";
import {AdvertisementCardModel, CommentsDataModel, QuestionAnswerDataModel} from "@waldent-panels-front/models";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private apiService: ApiService) {
  }

  advertisementCardsData(): Observable<AdvertisementCardModel[]> {
    return this.apiService.get<AdvertisementCardModel[]>('assets/mock/dashboard/advertisement-card.json');
  }

  receivedOrdersStatusCardsData(): Observable<AdvertisementCardModel[]> {
    return this.apiService.get<AdvertisementCardModel[]>('assets/mock/dashboard/advertisement-card.json');
  }

  commentsCardsSlideData(): Observable<CommentsDataModel[]> {
    return this.apiService.get<CommentsDataModel[]>('assets/mock/dashboard/comments-card.json');
  }

  questionAnswerCardsSlideData(): Observable<QuestionAnswerDataModel[]> {
    return this.apiService.get<QuestionAnswerDataModel[]>('assets/mock/dashboard/question-answer.json');
  }
}

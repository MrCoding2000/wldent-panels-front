import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {
  AdvertisementCardModel, CommentsDataModel, EditAdvertisementDataModel,
  NewAdvertisementRequest,
  OptionalCardsDataModel,
  QuestionAnswerDataModel
} from "@waldent-panels-front/models";
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

  questionAnswerCardsSlideData(): Observable<QuestionAnswerDataModel[]> {
    return this.apiService.get<QuestionAnswerDataModel[]>('assets/mock/dashboard/question-answer.json');
  }

  commentsCardsSlideData(): Observable<CommentsDataModel[]> {
    return this.apiService.get<CommentsDataModel[]>('assets/mock/dashboard/comments-card.json');
  }

  advertisementData(): Observable<EditAdvertisementDataModel> {
    return this.apiService.get<EditAdvertisementDataModel>('assets/mock/advertisement/edit-advertisement-data.json');
  }

  //TODO: If It is Redundent remove it
  advertisementRejectCardsData(): Observable<OptionalCardsDataModel<any>[]> {
    return this.apiService.get<OptionalCardsDataModel<any>[]>('assets/mock/advertisement/reject-advertisement-data.json')
  }

  advertisementActiveCardsData(): Observable<OptionalCardsDataModel<any>[]> {
    return this.apiService.get<OptionalCardsDataModel<any>[]>('assets/mock/advertisement/active-advertisement-data.json')
  }

  uploadProductImage(formData: FormData) {
    return this.apiService.get('');
  }

  advertisementDetailsReportsCardsData() {
    return this.apiService.get<OptionalCardsDataModel<any>[]>('assets/mock/advertisement/advertisement-reports.json')
  }
}

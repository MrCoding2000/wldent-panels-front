import {Injectable} from '@angular/core';
import {ApiService} from "@waldent-panels-front/services";
import {Observable} from "rxjs";
import {
  AdvertisementCardModel,
  CommentsDataModel,
  EditAdvertisementDataModel,
  OptionalCardsDataModel,
  QuestionAnswerDataModel
} from "@waldent-panels-front/models";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  constructor(private apiService: ApiService) {
  }

  advertisementRejectCardsData(): Observable<OptionalCardsDataModel[]> {
    return this.apiService.get<OptionalCardsDataModel[]>('assets/mock/advertisement/reject-advertisement-data.json')
  }

  advertisementActiveCardsData(): Observable<OptionalCardsDataModel[]> {
    return this.apiService.get<OptionalCardsDataModel[]>('assets/mock/advertisement/active-advertisement-data.json')
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

  uploadProductImage(formData: FormData) {
    return this.apiService.get('');
  }

  adverstisementDataById(id: number): Observable<any> {
    return this.apiService.get(`assets/mock/advertisement/edit-advertisement-data.json`);
  }
}

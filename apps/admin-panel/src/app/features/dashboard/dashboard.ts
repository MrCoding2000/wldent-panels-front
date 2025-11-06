import {Component, OnInit} from '@angular/core';
import {AdvertisementCardModel, CommentsDataModel, QuestionAnswerDataModel} from "@waldent-panels-front/models";
import {I18nService} from "@waldent-panels-front/translate";
import {Card, CommentsCards, QuestionAnswer} from "@waldent-panels-front/ui";
import {DashboardService} from "./service/dashboard";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Card,
    CommentsCards,
    QuestionAnswer
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  advertisementStatusList!: AdvertisementCardModel[];
  receivedOrdersStatusList!: AdvertisementCardModel[];
  commentsCardsSlideData!: CommentsDataModel[];
  questionsAnswerCardsSlideData!: QuestionAnswerDataModel[];


  constructor(public i18n: I18nService, private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getAdvertisementCardsData();
    this.getReceivedOrdersCardsData();
    this.getCommentsCardsSlideData();
    this.getQuestionAnswerCardsSlideData();
  }

  getAdvertisementCardsData() {
    this.dashboardService.advertisementCardsData().subscribe((data: AdvertisementCardModel[]) => {
      this.advertisementStatusList = data;
    })
  }

  getReceivedOrdersCardsData() {
    this.dashboardService.receivedOrdersStatusCardsData().subscribe((data: AdvertisementCardModel[]) => {
      this.receivedOrdersStatusList = data;
    })
  }

  getCommentsCardsSlideData() {
    this.dashboardService.commentsCardsSlideData().subscribe((data: CommentsDataModel[]) => {
      this.commentsCardsSlideData = data;
    })
  }

  getQuestionAnswerCardsSlideData() {
    this.dashboardService.questionAnswerCardsSlideData().subscribe((data: QuestionAnswerDataModel[]) => {
      this.questionsAnswerCardsSlideData = data;
    })
  }

}

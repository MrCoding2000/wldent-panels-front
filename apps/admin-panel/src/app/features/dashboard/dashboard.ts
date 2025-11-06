import {Component, OnInit} from '@angular/core';
import {
  AdvertisementCardModel,
  CommentsDataModel,
  QuestionAnswerDataModel,
  TicketCardDataModel
} from "@waldent-panels-front/models";
import {I18nService} from "@waldent-panels-front/translate";
import {Card, CommentsCards, QuestionAnswer} from "@waldent-panels-front/ui";
import {DashboardService} from "./service/dashboard";
import {TicketCards} from "@waldent-panels-front/ui";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Card,
    CommentsCards,
    QuestionAnswer,
    TicketCards
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  advertisementStatusList!: AdvertisementCardModel[];
  receivedOrdersStatusList!: AdvertisementCardModel[];
  commentsCardsSlideData!: CommentsDataModel[];
  questionsAnswerCardsSlideData!: QuestionAnswerDataModel[];
  ticketCardsSlideData!: TicketCardDataModel[];


  constructor(public i18n: I18nService, private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getAdvertisementCardsData();
    this.getReceivedOrdersCardsData();
    this.getCommentsCardsSlideData();
    this.getQuestionAnswerCardsSlideData();
    this.getTicketCardsSlideData();
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

  getTicketCardsSlideData() {
    this.dashboardService.ticketCardsSlideData().subscribe((data: TicketCardDataModel[]) => {
      this.ticketCardsSlideData = data;
    })
  }

}

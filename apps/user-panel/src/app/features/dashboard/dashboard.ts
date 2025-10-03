import {Component, OnInit} from '@angular/core';
import {I18nService} from "@waldent-panels-front/translate";
import {Card} from "@waldent-panels-front/ui";
import {AdvertisementCardModel, CommentsDataModel} from "@waldent-panels-front/models";
import {DashboardService} from "./service/dashboard.service";
import {CommentsCards} from "@waldent-panels-front/ui";

@Component({
  selector: 'app-dashboard',
  imports: [
    Card,
    CommentsCards
  ],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  advertisementStatusList!: AdvertisementCardModel[];
  receivedOrdersStatusList!: AdvertisementCardModel[];
  commentsCardsSlideData!: CommentsDataModel[];


  constructor(public i18n: I18nService, private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getAdvertisementCardsData();
    this.getReceivedOrdersCardsData();
    this.getCommentsCardsSlideData();
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
}

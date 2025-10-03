import {Component, OnInit} from '@angular/core';
import {I18nService} from "@waldent-panels-front/translate";
import {Card} from "@waldent-panels-front/ui";
import {AdvertisementCardModel} from "@waldent-panels-front/models";
import {DashboardService} from "./service/dashboard.service";

@Component({
  selector: 'app-dashboard',
  imports: [
    Card
  ],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  advertisementStatusList!: AdvertisementCardModel[];
  receivedOrdersStatusList!: AdvertisementCardModel[];


  constructor(public i18n: I18nService, private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getAdvertisementCardsData();
    this.getReceivedOrdersCardsData();
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
}

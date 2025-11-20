import {Component, OnInit} from '@angular/core';
import {I18nService} from "@waldent-panels-front/translate";
import {Card} from "@waldent-panels-front/ui";
import {AdvertisementCardModel} from "@waldent-panels-front/models";
import {AdvertisementService} from "./service/advertisement-service";

@Component({
  selector: 'app-advertisement',
  standalone: true,
  imports: [
    Card
  ],
  templateUrl: './advertisement.html',
  styleUrl: './advertisement.scss'
})
export class Advertisement implements OnInit {
  advertisementStatusList: AdvertisementCardModel[] = [];

  constructor(public i18n: I18nService, private advertisementService: AdvertisementService) {
  }

  ngOnInit() {
    this.getAdvertisementCardsData();
  }

  getAdvertisementCardsData() {
    this.advertisementService.advertisementCardsData().subscribe((data: AdvertisementCardModel[]) => {
      this.advertisementStatusList = data;
    })
  }
}

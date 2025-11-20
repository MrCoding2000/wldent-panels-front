import {Component, OnInit} from '@angular/core';
import {FilterBar, OptionalCard} from "@waldent-panels-front/ui";
import {OptionalCardsDataModel} from "@waldent-panels-front/models";
import {I18nService} from "@waldent-panels-front/translate";
import {AdvertisementService} from "../service/advertisement-service";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-new-advertisement-request',
  standalone: true,
  imports: [
    FilterBar,
    OptionalCard,
    DecimalPipe
  ],
  templateUrl: './new-advertisement-request.html',
  styleUrl: './new-advertisement-request.scss'
})
export class NewAdvertisementRequest implements OnInit {
  advertisementNewRequestCardsData!: OptionalCardsDataModel<NewAdvertisementRequest>[];

  constructor(public i18n: I18nService, private advertisementService: AdvertisementService,) {
  }

  ngOnInit() {
    this.getAdvertisementNewRequestCardsData();
  }

  /**
   * TODO: AdvertisementRejectCardsData
   */
  getAdvertisementNewRequestCardsData() {
    this.advertisementService.advertisementNewRequestCardsData().subscribe((data: any) => {
      this.advertisementNewRequestCardsData = data;
    })
  }

  /**
   *
   * @param $event
   */
  onRejectRequest($event: number) {

  }
}

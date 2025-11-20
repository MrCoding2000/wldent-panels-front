import {Component, OnInit} from '@angular/core';
import {Card, OptionalCard} from "@waldent-panels-front/ui";
import {I18nService} from "@waldent-panels-front/translate";
import {AdvertisementCardModel, OptionalCardsDataModel} from "@waldent-panels-front/models";
import {DashboardService} from "../../dashboard/service/dashboard.service";
import {AdvertisementService} from "../service/advertisement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-advertisement',
  imports: [
    Card,
    OptionalCard
  ],
  standalone: true,
  templateUrl: './reject-advertisement.html',
  styleUrl: './reject-advertisement.scss'
})
export class RejectAdvertisement implements OnInit {
  advertisementStatusList!: AdvertisementCardModel[];
  rejectAdvertisementData!: OptionalCardsDataModel<any>[];

  constructor(public i18n: I18nService, private dashboardService: DashboardService, private advertisementService: AdvertisementService, private router: Router) {
  }

  ngOnInit() {
    this.getAdvertisementCardsData();
    this.getAdvertisementRejectCardsData();
  }

  /**
   * TODO: Move To Own Service
   */
  getAdvertisementCardsData() {
    this.dashboardService.advertisementCardsData().subscribe((data: AdvertisementCardModel[]) => {
      this.advertisementStatusList = data;
    })
  }

  /**
   * TODO: AdvertisementRejectCardsData
   */
  getAdvertisementRejectCardsData() {
    this.advertisementService.advertisementRejectCardsData().subscribe((data: OptionalCardsDataModel<any>[]) => {
      this.rejectAdvertisementData = data;
    })
  }

  /**
   * TODO: Review Request
   * @param id
   */
  onReviewRequest(id: number) {
  }

  onNavigateToEditAdvertisement(id: number) {
    this.router.navigate(['advertisement/edit', {
      id: id
    }])
  }
}

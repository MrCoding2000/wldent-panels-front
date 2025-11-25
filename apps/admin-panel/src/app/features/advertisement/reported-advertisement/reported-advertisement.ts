import {Component, OnInit} from '@angular/core';
import {FilterBar, OptionalCard} from "@waldent-panels-front/ui";
import {OptionalCardsDataModel} from "@waldent-panels-front/models";
import {I18nService} from "@waldent-panels-front/translate";
import {AdvertisementService} from "../service/advertisement-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reported-advertisement',
  standalone: true,
  imports: [
    FilterBar,
    OptionalCard
  ],
  templateUrl: './reported-advertisement.html',
  styleUrl: './reported-advertisement.scss'
})
export class ReportedAdvertisement implements OnInit {
  advertisementDetailsReportsCardsData!: OptionalCardsDataModel<any>[];

  constructor(public i18n: I18nService, private advertisementService: AdvertisementService, private router: Router) {
  }

  ngOnInit() {
    this.getAdvertisementDetailsReportsCardsData();
  }

  getAdvertisementDetailsReportsCardsData() {
    this.advertisementService.advertisementDetailsReportsCardsData().subscribe((data: OptionalCardsDataModel<any>[]) => {
      this.advertisementDetailsReportsCardsData = data;
    })
  }

  onGoToReportedAdvertisement(id: number) {
    this.router.navigate(['/advertisement/details', id]).then();
  }
}

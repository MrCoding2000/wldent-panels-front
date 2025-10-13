import {Component, OnInit} from '@angular/core';
import {FilterBar, OptionalCard} from "@waldent-panels-front/ui";
import {I18nService} from "@waldent-panels-front/translate";
import {AdvertisementService} from "../../service/advertisement.service";
import {OptionalCardsDataModel} from "@waldent-panels-front/models";
import {DecimalPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ToggleSwitch} from "primeng/toggleswitch";

@Component({
  selector: 'app-active-advertisement',
  imports: [
    FilterBar,
    OptionalCard,
    DecimalPipe,
    FormsModule,
    ToggleSwitch
  ],
  standalone: true,
  templateUrl: './active-advertisement.html',
  styleUrl: './active-advertisement.scss'
})
export class ActiveAdvertisement implements OnInit {
  activeAdvertisementData!: OptionalCardsDataModel[];
  checked: any;

  constructor(public i18n: I18nService, private advertisementService: AdvertisementService) {
  }

  ngOnInit() {
    this.getAdvertisementActiveCardsData();
  }

  /**
   * TODO: AdvertisementRejectCardsData
   */
  getAdvertisementActiveCardsData() {
    this.advertisementService.advertisementActiveCardsData().subscribe((data: OptionalCardsDataModel[]) => {
      this.activeAdvertisementData = data;
    })
  }

  /**
   * TODO:Set Discount Request
   * @param $event
   */
  onSetDiscountRequest($event: number) {

  }

  /**
   * Edit Advertisement
   * @param id
   */
  onEditAdvertisement(id: number) {

  }
}

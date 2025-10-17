import {Component, OnInit} from '@angular/core';
import {FilterBar, OptionalCard, ToggleSwitch} from "@waldent-panels-front/ui";
import {I18nService} from "@waldent-panels-front/translate";
import {AdvertisementService} from "../service/advertisement.service";
import {OptionalCardsDataModel} from "@waldent-panels-front/models";
import {DecimalPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-active-advertisement',
  imports: [
    FilterBar,
    OptionalCard,
    DecimalPipe,
    FormsModule, ToggleSwitch
  ],
  standalone: true,
  templateUrl: './active-advertisement.html',
  styleUrl: './active-advertisement.scss'
})
export class ActiveAdvertisement implements OnInit {
  activeAdvertisementData!: OptionalCardsDataModel[];
  checked: any;
  notificationsEnabled!: string;

  constructor(public i18n: I18nService, private advertisementService: AdvertisementService, public sanitizer: DomSanitizer) {
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

  /**
   * TODO:Change Advertisement Existence Status
   * @param id
   */
  onChangeAdExistenceStatus(id: number): void {
    console.log(id)
  }
}

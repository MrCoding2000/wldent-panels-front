import {Component} from '@angular/core';
import {I18nService} from "@waldent-panels-front/translate";

@Component({
  selector: 'app-dashboard',
  imports: [],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  advertisementStatusList: any;

  constructor(public i18n: I18nService) {
  }
}

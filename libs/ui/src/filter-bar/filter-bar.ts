import {Component} from '@angular/core';
import {I18nService} from "@waldent-panels-front/translate";
import {NgClass} from "@angular/common";

@Component({
  selector: 'lib-filter-bar',
  imports: [
    NgClass
  ],
  standalone: true,
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss'
})
export class FilterBar {
  orderFilterNames: string[] = ['newest', 'oldest', 'bestSeller', 'lowestSales'];
  orderFilterActive: string = 'newest';

  constructor(public i18n: I18nService) {
  }
}

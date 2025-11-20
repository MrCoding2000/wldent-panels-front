import {Component, Input} from '@angular/core';
import {AdvertisementCardModel} from "@waldent-panels-front/models";
import {Router} from "@angular/router";

@Component({
  selector: 'lib-card',
  imports: [],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() cardsList!: AdvertisementCardModel[];
  @Input() sectionTitle!: string;

  constructor(private router: Router) {
  }

  onNavigateToRouterLink(routerLink: string) {
    this.router.navigate([routerLink]).then();
  }
}

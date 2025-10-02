import {Component, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'lib-card',
  imports: [],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() svgIcon!: string;
  @Input() title!: string;
  @Input() amount!: string;

  constructor(public sanitizer: DomSanitizer) {
  }

}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-card',
  imports: [],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() title!: string;
  @Input() number!: number;
  @Input() imageSrc!: string;

  constructor() {
  }

}

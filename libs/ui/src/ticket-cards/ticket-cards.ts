import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output} from '@angular/core';
import {Rating} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {TicketCardDataModel} from "@waldent-panels-front/models";

@Component({
  selector: 'lib-ticket-cards',
  standalone: true,
  imports: [
    Rating,
    FormsModule
  ],
  templateUrl: './ticket-cards.html',
  styleUrl: './ticket-cards.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketCards {
  @Input() ticketCardsSlideData!: TicketCardDataModel[];
  @Input() actionButtonTitle!: string;
  @Output() ticketAnswerEmitter: EventEmitter<void> = new EventEmitter<void>();

}

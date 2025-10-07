import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {Rating} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {I18nService} from "@waldent-panels-front/translate";
import {NgTemplateOutlet} from "@angular/common";
import {OptionalCardsDataModel} from "@waldent-panels-front/models";

@Component({
  selector: 'lib-optional-card',
  imports: [
    Rating,
    FormsModule,
    NgTemplateOutlet
  ],
  standalone: true,
  templateUrl: './optional-card.html',
  styleUrl: './optional-card.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OptionalCard {
  @Input() optionalCardsSlideData!: OptionalCardsDataModel[];
  @Input() optionalCardTemplate!: TemplateRef<any>;
  @Input() headerTitle!: string;
  @Input() actionButtonTitle!: string;

  @Output() actionClick: EventEmitter<number> = new EventEmitter();
  constructor(public i18n: I18nService) {
  }
}

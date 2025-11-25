import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {Rating} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {I18nService} from "@waldent-panels-front/translate";
import {NgClass, NgStyle, NgTemplateOutlet} from "@angular/common";
import {NewAdvertisementRequest, OptionalCardsDataModel} from "@waldent-panels-front/models";

@Component({
  selector: 'lib-optional-card',
  imports: [
    Rating,
    FormsModule,
    NgTemplateOutlet,
    NgStyle,
    NgClass
  ],
  standalone: true,
  templateUrl: './optional-card.html',
  styleUrl: './optional-card.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OptionalCard {
  @Input() hasHeader = true;
  @Input() optionalCardsSlideData!: OptionalCardsDataModel<any | NewAdvertisementRequest>[];
  @Input() optionalCardTemplate!: TemplateRef<any>;
  @Input() headerTitle!: string;
  @Input() rightActionButtonTitle: string = ''
  @Input() rightButtonClass: string = 'edit-button'
  @Input() actionButtonTitle!: string;
  @Input() isSliderCard: boolean = false;
  @Input() hasSecondButton = true;

  @Output() actionClick: EventEmitter<number> = new EventEmitter();
  @Output() onRightActionButtonClick: EventEmitter<number> = new EventEmitter();
  constructor(public i18n: I18nService) {
    this.rightActionButtonTitle = i18n.translate('optional-card.edit-ad');
  }
}

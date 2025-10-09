import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output} from '@angular/core';
import {I18nService} from "@waldent-panels-front/translate";
import {QuestionAnswerDataModel} from "@waldent-panels-front/models";

@Component({
  selector: 'lib-question-answer',
  standalone: true,
  imports: [],
  templateUrl: './question-answer.html',
  styleUrl: './question-answer.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuestionAnswer {
  @Input() headerTitle!: string;
  @Input() questionAnswerCardsSlideData!: QuestionAnswerDataModel[];
  @Input() actionButtonTitle!: string;

  @Output() saveQuestion: EventEmitter<number> = new EventEmitter();

  constructor(public i18n: I18nService) {
  }
}

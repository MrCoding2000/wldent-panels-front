import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {Rating} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {CommentsDataModel} from "@waldent-panels-front/models";

@Component({
  selector: 'lib-comments-cards',
  imports: [
    Rating,
    FormsModule
  ],
  standalone: true,
  templateUrl: './comments-cards.html',
  styleUrl: './comments-cards.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommentsCards {
  @Input() commentsCardsSlideData!: CommentsDataModel[];
}

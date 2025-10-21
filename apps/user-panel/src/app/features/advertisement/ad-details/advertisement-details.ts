import {Component, Input, OnInit} from '@angular/core';
import {CommentsCards, ProductDetails, QuestionAnswer, ToggleSwitch} from "@waldent-panels-front/ui";
import {DecimalPipe} from "@angular/common";
import {I18nService} from "@waldent-panels-front/translate";
import {CommentsDataModel, EditAdvertisementDataModel, QuestionAnswerDataModel} from "@waldent-panels-front/models";
import {AdvertisementService} from "../service/advertisement.service";

@Component({
  selector: 'app-ad-details',
  imports: [
    ToggleSwitch,
    DecimalPipe,
    QuestionAnswer,
    CommentsCards,
    ProductDetails
  ],
  standalone: true,
  templateUrl: './advertisement-details.html',
  styleUrl: './advertisement-details.scss'
})
export class AdvertisementDetails implements OnInit {
  @Input() advertisementCode!: string;
  adMainInfoList: string[] = ['adCost', 'adCode', 'adDate', 'adExistenceNumber'];
  adCompleteInfoList: string[] = ['productSellNumbers', 'productRate', 'commentNumbers', 'questionNumbers', 'off', 'imageNumbers', 'videoNumbers', 'isStock'];
  questionsAnswerCardsSlideData!: QuestionAnswerDataModel[];
  commentsCardsSlideData!: CommentsDataModel[];
  advertisementData!: EditAdvertisementDataModel;

  constructor(public i18n: I18nService, private advertisementService: AdvertisementService,) {
  }

  ngOnInit() {
    this.getAdvertisementData();
    this.getQuestionAnswerCardsSlideData();
    this.getCommentsCardsSlideData();
  }

  getAdvertisementData() {
    this.advertisementService.advertisementData().subscribe((data: EditAdvertisementDataModel) => {
      this.advertisementData = data;
    })
  }

  /**
   * Change Advertisement Existence Status
   * @param $event
   */
  onChangeAdExistenceStatus($event: boolean) {

  }

  /**
   * TODO: Delete Product Image
   * @param id
   */
  onDeleteProductImage(id: number) {

  }

  /**
   * TODO: Question Answer Cards Slide Data
   */
  getQuestionAnswerCardsSlideData() {
    this.advertisementService.questionAnswerCardsSlideData().subscribe((data: QuestionAnswerDataModel[]) => {
      this.questionsAnswerCardsSlideData = data;
    })
  }

  /**
   * Comments Cards Slide Data
   */
  getCommentsCardsSlideData() {
    this.advertisementService.commentsCardsSlideData().subscribe((data: CommentsDataModel[]) => {
      this.commentsCardsSlideData = data;
    })
  }

  /**
   * TODO: Navigate To Edit Advertisement Page
   */
  onNavigateToEditAdvertisementPage() {
    // this.advertisementCode
  }
}

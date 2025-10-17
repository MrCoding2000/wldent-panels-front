import {Component, OnInit} from '@angular/core';
import {CommentsCards, QuestionAnswer, ToggleSwitch} from "@waldent-panels-front/ui";
import {DecimalPipe} from "@angular/common";
import {I18nService} from "@waldent-panels-front/translate";
import {CommentsDataModel, EditAdvertisementDataModel, QuestionAnswerDataModel} from "@waldent-panels-front/models";
import {AdvertisementService} from "../service/advertisement.service";

@Component({
  selector: 'app-edit-advertisement',
  imports: [
    ToggleSwitch,
    DecimalPipe,
    QuestionAnswer,
    CommentsCards
  ],
  standalone: true,
  templateUrl: './edit-advertisement.html',
  styleUrl: './edit-advertisement.scss'
})
export class EditAdvertisement implements OnInit {
  editAdActionButtons: { icon: string, title: string }[] = [
    {icon: 'edit', title: 'حذف'},
    // { icon: 'edit', title: 'ارشیو کردن آگهی' },
    {icon: 'edit', title: 'افزودن تخفیف'},
  ];
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
}

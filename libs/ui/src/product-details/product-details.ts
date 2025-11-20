import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToggleSwitch} from "../toggle-switch/toggle-switch";
import {DecimalPipe} from "@angular/common";
import {EditAdvertisementDataModel} from "@waldent-panels-front/models";
import {DomSanitizer} from "@angular/platform-browser";
import {I18nService} from "@waldent-panels-front/translate";

@Component({
  selector: 'lib-product-details',
  imports: [
    ToggleSwitch,
    DecimalPipe
  ],
  standalone: true,
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
  // TODO: MODEL CHECK
  @Input() productMainInfoList!: { key: string, iconSrc: string, unitIconSrc?: string }[];
  @Input() productCompleteInfoList!: { key: string, iconSrc: string, unitIconSrc?: string }[];
  @Input() productData!: EditAdvertisementDataModel;
  @Input() hasActionButtons = true;

  @Output() deleteImageId: EventEmitter<number> = new EventEmitter();
  @Output() productExistenceCheck: EventEmitter<boolean> = new EventEmitter();
  @Output() editProduct: EventEmitter<void> = new EventEmitter();

  productDetailsActionButtons: { icon: string, title: string }[] = [
    {icon: 'edit', title: 'حذف'},
    // { icon: 'edit', title: 'ارشیو کردن آگهی' },
    {icon: 'edit', title: 'افزودن تخفیف'},
  ];

  constructor(public sanitizer: DomSanitizer, public i18n: I18nService) {
  }

  /**
   * TODO: Add Dialog
   * Delete Product Image
   * @param id
   */
  onDeleteProductImage(id: number) {
    this.deleteImageId.emit(id);
  }
}

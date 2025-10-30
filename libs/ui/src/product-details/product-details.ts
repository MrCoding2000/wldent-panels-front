import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToggleSwitch} from "../toggle-switch/toggle-switch";
import {DecimalPipe} from "@angular/common";

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
  @Input() productMainInfoList!: { icon: string, value: number | string }[] | string[];
  @Input() productCompleteInfoList!: { icon: string, value: number | string }[] | string[];
  @Input() cost!: number;
  @Input() productImages!: {id: number, src: string} [];
  @Input() productName!: string;
  @Input() isProductExist!: boolean;

  @Output() deleteImageId: EventEmitter<number> = new EventEmitter();
  @Output() productExistenceCheck: EventEmitter<boolean> = new EventEmitter();
  @Output() editProduct: EventEmitter<void> = new EventEmitter();

  productDetailsActionButtons: { icon: string, title: string }[] = [
    {icon: 'edit', title: 'حذف'},
    // { icon: 'edit', title: 'ارشیو کردن آگهی' },
    {icon: 'edit', title: 'افزودن تخفیف'},
  ];

  /**
   * TODO: Add Dialog
   * Delete Product Image
   * @param id
   */
  onDeleteProductImage(id: number) {
    this.deleteImageId.emit(id);
  }
}

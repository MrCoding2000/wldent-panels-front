import {Injectable, Type} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";

@Injectable({
  providedIn: 'root'
})
export class WaldentDialogService {
  #dynamicDialogRef?: DynamicDialogRef;

  constructor(private dialogService: DialogService) {
  }

  openDialog(component: Type<any>, header: string) {
    this.#dynamicDialogRef = this.dialogService.open(component, {
      header,
      width: '400px',
      modal: true,
    }) as any;

    this.#dynamicDialogRef?.onClose.subscribe(result => {
      if (result) {
        console.log('نتیجه از دیالوگ:', result);
      }
    });
  }
}

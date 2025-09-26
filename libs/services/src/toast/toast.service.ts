import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({providedIn: 'root'})
export class ToastService {
  constructor(private messageService: MessageService) {
  }

  success(detail: string, summary: string = 'موفقیت') {
    this.messageService.add({severity: 'success', summary, detail});
  }

  error(detail: string, summary: string = 'خطا') {
    this.messageService.add({severity: 'error', summary, detail});
  }

  warn(detail: string, summary: string = 'هشدار') {
    this.messageService.add({severity: 'warn', summary, detail});
  }

  info(detail: string, summary: string = 'اطلاع') {
    this.messageService.add({severity: 'info', summary, detail});
  }
}

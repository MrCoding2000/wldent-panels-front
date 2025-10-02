import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {I18nService} from "@waldent-panels-front/translate";
import {NgClass} from "@angular/common";
import {FormBuilder, FormsModule} from "@angular/forms";
import {ButtonDirective} from "primeng/button";

@Component({
  selector: 'lib-login',
  imports: [
    FormsModule,
    ButtonDirective,
    NgClass
  ],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  code: string[] = Array(4).fill('');
  timeLeft: number = 119;
  private intervalId: any;

  @ViewChildren('otpInput') inputs!: QueryList<ElementRef>;

  constructor(public i18n: I18nService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value && index < this.code.length - 1) {
      this.focusInput(index + 1);
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !input.value && index > 0) {
      this.focusInput(index - 1);
    }
  }

  private focusInput(index: number) {
    const inputsArray = this.inputs.toArray();
    inputsArray[index].nativeElement.focus();
  }

  submitCode() {
    const finalCode = this.code.join('');
    console.log('OTP Code:', finalCode);
  }

  phoneNumber: string = '';
  otp: string[] = Array(5).fill('');
  showOtp: boolean = false;

  showOtpForm() {
    this.showOtp = true;
    this.startTimer();
    console.log('Phone:', this.phoneNumber);
    // TODO: ارسال OTP
  }

  submitOtp() {
    const code = this.otp.join('');
    console.log('OTP:', code);
    // TODO: اعتبارسنجی OTP
  }

  startTimer() {
    this.timeLeft = 119; // ریست به 01:59
    this.clearTimer();

    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.clearTimer();
      }
    }, 1000);
  }

  clearTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  formatTime(seconds: number): string {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }
}

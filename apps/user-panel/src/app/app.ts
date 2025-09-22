import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {I18nService} from "@waldent-panels-front/i18n";

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(public i18n: I18nService) {
    this.i18n.setLanguage('fa', 'user-panel');
  }
}

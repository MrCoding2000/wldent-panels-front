import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {I18nService} from "@waldent-panels-front/translate";
import {MainHeader} from "@waldent-panels-front/ui";
import {BaseService} from "@waldent-panels-front/services";
import {ActionsListModel, BigButtonActionsListModel} from "@waldent-panels-front/models";

@Component({
  imports: [RouterModule, MainHeader],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  headerActionsList: ActionsListModel[] = [
    {icon: 'bell', command: () => this.notificationsHandler()},
    {icon: 'moon', command: () => this.changeTheme()},
    {icon: 'language', command: () => this.changeLanguage()}
  ];
  headerBigButtonActionsList: BigButtonActionsListModel[] = [
    {title: 'ایجاد آگهی جدید', icon: 'add', background: '#009975', command: () => this.onAddAdvertisement()}
  ];

  constructor(public i18n: I18nService, public baseService: BaseService,) {
    this.i18n.setLanguage('fa', 'user-panel');
  }

  /**
   * TODO:Notifications Handler
   * @private
   */
  private notificationsHandler() {
  }

  /**
   * TODO:Change Theme
   * @private
   */
  private changeTheme() {
  }

  /**
   * TODO:Change Language
   * @private
   */
  private changeLanguage() {
  }

  /**
   * TODO:Add Advertisement
   * @private
   */
  private onAddAdvertisement() {
  }
}

import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {I18nService} from "@waldent-panels-front/translate";
import {Header, ResponsiveHeader, Sidebar} from "@waldent-panels-front/ui";
import {BaseService} from "@waldent-panels-front/services";
import {UserBaseService} from "./core/service/base.service";
import {ActionsListModel, BigButtonActionsListModel} from "@waldent-panels-front/models";
import {NgStyle} from "@angular/common";
import {SidebarModel} from "@waldent-panels-front/models";
import {Drawer} from "primeng/drawer";

@Component({
  imports: [RouterModule, Header, ResponsiveHeader, NgStyle, Sidebar, Drawer],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  headerActionsList: ActionsListModel[] = [
    {icon: 'bell', command: () => this.notificationsHandler()},
    {icon: 'moon', command: () => this.changeTheme()},
    {icon: 'language', command: () => this.changeLanguage()}
  ];
  headerBigButtonActionsList: BigButtonActionsListModel[] = [
    {title: 'ایجاد آگهی جدید', icon: 'add', background: '#009975', command: () => this.onAddAdvertisement()}
  ];

  responsiveHeaderActionsList: ActionsListModel[] = [
    {icon: 'bell', command: () => this.notificationsHandler()},
    {icon: 'headphones', command: () => this.supportHandler()},
  ];
  sidebarMenu!: SidebarModel[];
  isSidebarOpen = true;

  constructor(public i18n: I18nService, public baseService: BaseService, private userBaseService: UserBaseService) {
    this.i18n.setLanguage('fa', 'user-panel');
  }

  ngOnInit() {
    this.getSidebarData();
  }

  getSidebarData() {
    this.userBaseService.sidebarData().subscribe((sidebar: SidebarModel[]) => {
      this.sidebarMenu = sidebar;
    })
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
   * TODO:Add RejectAdvertisement
   * @private
   */
  private onAddAdvertisement() {
  }

  /**
   * TODO:Support Handler
   * @private
   */
  private supportHandler() {

  }

  /**
   * Change SideBar Open Status
   */
  onChangeSideBarOpenStatus() {
    console.log(this.isSidebarOpen);
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

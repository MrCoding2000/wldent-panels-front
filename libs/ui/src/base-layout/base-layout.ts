import {Component, Input} from '@angular/core';
import {ActionsListModel, BigButtonActionsListModel, SidebarModel} from "@waldent-panels-front/models";
import {I18nService} from "@waldent-panels-front/translate";
import {BaseService} from "@waldent-panels-front/services";
import {Header, ResponsiveHeader, Sidebar} from "@waldent-panels-front/ui";
import {Drawer} from "primeng/drawer";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'lib-base-layout',
  imports: [
    ResponsiveHeader,
    Header,
    Drawer,
    Sidebar,
    NgStyle
  ],
  standalone: true,
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.scss'
})
export class BaseLayout {
  @Input() headerActionsList!: ActionsListModel[];
  @Input() headerBigButtonActionsList!: BigButtonActionsListModel[];
  @Input() responsiveHeaderActionsList!: ActionsListModel[];
  @Input() sidebarMenu!: SidebarModel[];
  @Input() isSidebarOpen = false;

  constructor(public i18n: I18nService, public baseService: BaseService) {
    this.i18n.setLanguage('fa', 'user-panel');
  }

  /**
   * Change SideBar Open Status
   */
  onChangeSideBarOpenStatus() {
    console.log(this.isSidebarOpen);
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

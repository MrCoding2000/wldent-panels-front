import {Component, Input} from '@angular/core';
import {ActionsListModel, BigButtonActionsListModel, SidebarModel} from "@waldent-panels-front/models";
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

  constructor(public baseService: BaseService) {
  }

  /**
   * Change SideBar Open Status
   */
  onChangeSideBarOpenStatus() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

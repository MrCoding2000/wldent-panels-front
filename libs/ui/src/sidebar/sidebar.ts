import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {SidebarModel} from "@waldent-panels-front/models";
import {DomSanitizer} from "@angular/platform-browser";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'lib-sidebar',
  imports: [
    NgClass,
    RouterLink
  ],
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() isCollapsed = false;
  @Input() menuList!: SidebarModel[];

  constructor(protected sanitizer: DomSanitizer) {
  }
}

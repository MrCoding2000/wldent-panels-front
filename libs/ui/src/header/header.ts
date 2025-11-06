import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {ActionsListModel, BigButtonActionsListModel} from "@waldent-panels-front/models";

@Component({
  selector: 'lib-header',
  imports: [
    NgStyle,
    NgClass
  ],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() pageTitle!: string;
  @Input() actionsList!: ActionsListModel[];
  @Input() bigButtonActionsList: BigButtonActionsListModel[] = [];
  @Input() icon!: string;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() isCollapsed: any;

  @Output() openClose: EventEmitter<boolean> = new EventEmitter();
}

import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {ActionsListModel, BigButtonActionsListModel} from "@waldent-panels-front/models";

@Component({
  selector: 'lib-header',
  imports: [
    NgStyle
  ],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() pageTitle!: string;
  @Input() actionsList!: ActionsListModel[];
  @Input() bigButtonActionsList!: BigButtonActionsListModel[];
  @Input() icon!: string;
  @Input() title!: string;
  @Input() subTitle!: string;

}

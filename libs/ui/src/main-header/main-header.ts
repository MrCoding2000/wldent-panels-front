import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {ActionsListModel, BigButtonActionsListModel} from "@waldent-panels-front/models";

@Component({
  selector: 'lib-main-header',
  imports: [
    NgStyle
  ],
  standalone: true,
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss'
})
export class MainHeader {
  @Input() title!: string;
  @Input() actionsList!: ActionsListModel[];
  @Input() bigButtonActionsList!: BigButtonActionsListModel[];

}

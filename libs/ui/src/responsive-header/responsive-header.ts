import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActionsListModel} from "@waldent-panels-front/models";

@Component({
  selector: 'lib-responsive-header',
  imports: [],
  standalone: true,
  templateUrl: './responsive-header.html',
  styleUrl: './responsive-header.scss'
})
export class ResponsiveHeader {
  @Input() actionsList!: ActionsListModel[];
  @Input() icon!: string;
  @Input() title!: string;
  @Input() subTitle!: string;

  @Output() changeSideBarOpenStatus: EventEmitter<void> = new EventEmitter();

  constructor() {
  }
}

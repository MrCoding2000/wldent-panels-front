import {Component, Input} from '@angular/core';
import {ActionsListModel} from "@waldent-panels-front/models";
import {BaseService} from "@waldent-panels-front/services";

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

  constructor(public baseService: BaseService) {
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-toggle-switch',
  imports: [],
  standalone: true,
  templateUrl: './toggle-switch.html',
  styleUrl: './toggle-switch.scss'
})
export class ToggleSwitch {
  @Input() title!: string;

}

import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { CardIconOptions, CardOptions } from '../card-options';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
})
export class CardIconComponent implements OnInit {
  @Input() options?: CardIconOptions;

  static _isHover: boolean = false;

  @HostBinding('class.inactive') get isHover() {
    return CardIconComponent._isHover;
  }

  @HostListener('pointerenter')
  onHover() {
    CardIconComponent._isHover = true;
  }

  @HostListener('pointerleave')
  onLeave() {
    CardIconComponent._isHover = false;
  }

  ngOnInit(): void {
    this.options = new CardIconOptions(this.options);
  }

  getFlexClasses() {
    if (!this.options) return '';

    const currentFlexDirection = this.options.flexDirection;
    const oppositeFlexDirection =
      currentFlexDirection == 'column' ? 'row' : 'column';

    if (!this.options.swapDirectionAtBreakpoint)
      return `flex-${currentFlexDirection}`;

    return `flex-${currentFlexDirection} flex-${this.options.swapDirectionAtBreakpoint}-${oppositeFlexDirection}`;
  }
}

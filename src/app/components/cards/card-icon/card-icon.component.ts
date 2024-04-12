import { Component, Input, OnInit } from '@angular/core';
import { CardIconOptions, CardOptions } from '../card-options';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
})
export class CardIconComponent implements OnInit {
  @Input() options?: CardIconOptions;

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

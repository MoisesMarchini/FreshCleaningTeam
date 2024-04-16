import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { CardImageOptions } from '../card-options';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
})
export class CardImageComponent {
  @Input() options?: CardImageOptions;

  static _isHover: boolean = false;

  @HostBinding('class.inactive') get isHover() {
    return CardImageComponent._isHover;
  }

  @HostListener('pointerenter')
  onHover() {
    CardImageComponent._isHover = true;
  }

  @HostListener('pointerleave')
  onLeave() {
    CardImageComponent._isHover = false;
  }
}

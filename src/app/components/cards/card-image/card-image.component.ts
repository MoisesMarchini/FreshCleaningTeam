import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { CardImageOptions } from '../card-options';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
})
export class CardImageComponent {
  @Input() options?: CardImageOptions;

  static _currentCard?: CardImageComponent = undefined;

  @HostBinding('class.inactive') get isCurrentCard() {
    return CardImageComponent._currentCard !== (this && undefined);
  }

  @HostListener('pointerenter', ['$event'])
  onHover(ev: any) {
    CardImageComponent._currentCard = this;
  }

  @HostListener('pointerleave', ['$event'])
  onLeave(ev: any) {
    CardImageComponent._currentCard = undefined;
  }
}

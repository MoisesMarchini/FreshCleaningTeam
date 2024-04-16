import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-card-over-image',
  templateUrl: './section-card-over-image.component.html',
  styleUrls: ['./section-card-over-image.component.scss'],
})
export class SectionCardOverImageComponent {
  @Input() options: SectionCardOverImageOptions = {
    markUp: 'Mark-Up',
    title: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam
    recusandae nisi eum eaque perspiciatis rerum odio dicta. Exercitationem
    quia deleniti dolorum maxime obcaecati non ratione. Dolor, voluptatum.
    Recusandae, odio!`,
    imagePath: '1.jpg',
  };
  @Input() directionReverse: boolean = false;

  imagesRootPath = '/assets/cards/';
}

export interface SectionCardOverImageOptions {
  markUp?: string;
  title: string;
  body?: string;
  imagePath: string;
}

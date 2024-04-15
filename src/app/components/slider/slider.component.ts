import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;

  next() {
    if (!this.slider) return;

    const element = this.slider.nativeElement;
    const children = element.childNodes;
    element.append(children[0]);
  }

  previous() {
    if (!this.slider) return;

    const element = this.slider.nativeElement;
    const children = element.childNodes;
    element.prepend(children[children.length - 1]);
  }
}

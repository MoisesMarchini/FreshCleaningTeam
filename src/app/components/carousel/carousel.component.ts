import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() imgPaths: string[] = [];

  currentImgIndex = 0;

  previous() {
    this.currentImgIndex = this.getPrevious();
  }

  next() {
    this.currentImgIndex = this.getNext();
  }

  private getPrevious() {
    return (
      (this.currentImgIndex - 1 + this.imgPaths.length) % this.imgPaths.length
    );
  }

  private getNext() {
    return (this.currentImgIndex + 1) % this.imgPaths.length;
  }

  isInShowRange(imgIndex: number) {
    const previous = this.getPrevious();
    const next = this.getNext();

    return imgIndex == previous || next || this.currentImgIndex;
  }
}

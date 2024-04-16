import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @Input() autoplay: boolean = true;
  @Input() autoplayInterval: number = 2000;
  @Input() imgPaths: string[] = [];

  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  currentImgIndex = 0;
  interval: any;

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

  startCarousel() {
    if (!this.autoplay) return;

    this.interval = setInterval(() => this.next(), this.autoplayInterval);
  }

  pauseCarousel() {
    clearInterval(this.interval);
  }

  ngAfterViewInit(): void {
    this.startCarousel();

    if (!this.carousel) return;

    this.carousel.nativeElement.addEventListener('pointerenter', () =>
      this.pauseCarousel()
    );
    this.carousel.nativeElement.addEventListener('pointerleave', () =>
      this.startCarousel()
    );
  }
}

import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: 'section',
})
export class SectionAnimDirective implements OnInit {
  private show = false;
  private percentVisibleThreshold = 0; // Porcentagem de visibilidade desejada
  private additionalOffset = 50; // Deslocamento adicional em pixels

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const percentVisibleThreshold = this.percentVisibleThreshold / 100;
    const additionalOffset = this.additionalOffset;

    const element = this.elementRef.nativeElement;
    const viewportHeight = window.innerHeight;
    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + scrollPosition + additionalOffset;
    const elementBottom = elementRect.bottom + scrollPosition;
    const elementHeight = elementRect.height;

    const visibleHeight =
      Math.min(elementBottom, scrollPosition + viewportHeight) -
      Math.max(elementTop, scrollPosition);
    const visiblePercent = visibleHeight / elementHeight;

    const isAboveViewport = elementTop < scrollPosition + viewportHeight;

    this.show = isAboveViewport || visiblePercent >= percentVisibleThreshold;
  }

  @HostBinding('class.hide-section')
  get hideClass() {
    return !this.show;
  }
}

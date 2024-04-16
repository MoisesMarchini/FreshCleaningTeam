import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-btn-back-to-top',
  templateUrl: './btn-back-to-top.component.html',
  styleUrls: ['./btn-back-to-top.component.scss'],
})
export class BtnBackToTopComponent {
  show = false;
  minScrollToShow = 600;
  onClick() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;
    this.show = scrollY >= this.minScrollToShow;
  }
}

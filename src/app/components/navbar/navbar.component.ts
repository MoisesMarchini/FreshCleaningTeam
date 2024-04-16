import {
  Component,
  HostListener,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { environment } from 'src/environments/environment';

export const navProps = {
  totalHeight: 0,
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    id: 'navbar',
  },
})
export class NavbarComponent implements AfterViewInit {
  webTitle = environment.defaultWebTitle;
  homeRoute = environment.routes.home;
  expand = false;
  isSticked = false;
  smsLink = environment.smsLink();

  navLinks = environment.navLinks();

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    const navTotalHeight =
      this.elementRef.nativeElement.getBoundingClientRect().height;

    navProps.totalHeight = navTotalHeight;

    document.body.style.setProperty(
      '--nav-total-height',
      `${navTotalHeight}px`
    );
  }

  @HostListener('window:scroll')
  onScroll() {
    const windowScrollY = window.scrollY;

    this.isSticked = windowScrollY >= 1;
  }
}

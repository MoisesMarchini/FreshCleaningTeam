import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { navProps } from '../navbar/navbar.component';

@Component({
  selector: 'app-navbar-alt',
  templateUrl: './navbar-alt.component.html',
  styleUrls: ['./navbar-alt.component.scss'],
})
export class NavbarAltComponent implements AfterViewInit {
  webTitle = environment.defaultWebTitle;
  routes = environment.routes;
  expand = false;
  isSticked = false;

  navLinks = [
    {
      title: 'Gallery',
      route: this.routes.gallery,
    },
    {
      title: 'Cleaning Types',
      route: this.routes.cleaningTypes,
    },
    {
      title: 'Our Reviews',
      route: this.routes.reviews,
    },
    {
      title: 'FAQ',
      route: this.routes.faq,
    },
    {
      title: 'About Us',
      route: this.routes.aboutUs,
    },
  ];

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

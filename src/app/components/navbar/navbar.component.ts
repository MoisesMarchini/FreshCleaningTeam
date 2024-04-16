import {
  Component,
  HostListener,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    id: 'navbar',
  },
})
export class NavbarComponent implements AfterViewInit {
  routes = environment.routes;
  expand = false;

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
      title: 'Our Cleaning Process',
      route: this.routes.cleaningProcess,
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

    document.body.style.setProperty(
      '--nav-total-height',
      `${navTotalHeight}px`
    );
  }
}

import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  routes = environment.routes;
  expand = false;

  navLinks = [
    {
      title: 'Gallery',
      route: this.routes.gallery,
    },
    {
      title: 'Cleaning Tips',
      route: this.routes.cleaningTips,
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

  log(event: any) {
    console.log(event);
  }
}

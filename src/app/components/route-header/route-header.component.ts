import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-route-header',
  templateUrl: './route-header.component.html',
  styleUrls: ['./route-header.component.scss']
})
export class RouteHeaderComponent {
  private currentUrl = '';
  headerTitle?: {
    title: string,
    description: string,
    hideHeader: boolean
  };

  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.headerTitle = undefined;
        this.currentUrl = e.url.split('/')[1];
        this.headerTitle = this.refreshTitle();
      }
    })
  }

  private refreshTitle() {
    switch (this.currentUrl) {
      case environment.routes.home:
        return environment.routeHeaders.home;
      case environment.routes.aboutUs:
        return environment.routeHeaders.aboutUs;
      case environment.routes.service:
        return environment.routeHeaders.service;
      case environment.routes.contact:
        return environment.routeHeaders.contact;
      case environment.routes.termsOfUse:
        return environment.routeHeaders.termsOfUse;
      case environment.routes.privacyPolicy:
        return environment.routeHeaders.privacyPolicy;
      default:
        return environment.routeHeaders.home;
    }
  }
}

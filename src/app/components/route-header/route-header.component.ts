import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-route-header',
  templateUrl: './route-header.component.html',
  styleUrls: ['./route-header.component.scss'],
})
export class RouteHeaderComponent {
  private currentUrl = '';
  headerTitle?: {
    title: string;
    description: string;
    hideHeader: boolean;
  };

  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.headerTitle = undefined;
        this.currentUrl = e.url.split('/')[1];
        this.headerTitle = this.refreshTitle();
      }
    });
  }

  private refreshTitle() {
    const headerKeys = Object.keys(environment.routeHeaders) as Array<
      keyof typeof environment.routeHeaders
    >;
    const routeKeys = Object.keys(environment.routes) as Array<
      keyof typeof environment.routes
    >;
    const currentRouteKey = routeKeys.find(
      (key) => environment.routes[key] == this.currentUrl
    );
    const currentHeaderKey = headerKeys.find((key) => key == currentRouteKey);
    if (currentHeaderKey) return environment.routeHeaders[currentHeaderKey];

    return;
  }
}

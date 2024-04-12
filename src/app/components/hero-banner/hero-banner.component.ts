import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent {
  title: string = environment.defaultWebTitle;
  description: string =
    'We provide professional home cleaning services, <br>giving you peace of mind and freedom to enjoy your space worry-free.';
  bannerImg = '/assets/svgs/hero-banner.svg';
}

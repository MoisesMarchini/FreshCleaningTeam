import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent implements OnInit {
  title: string = environment.defaultWebTitle;

  videoUrl = '/assets/hero/hero-video.mp4';
  videoCoverUrl = '/assets/hero/hero-cover.png';

  ngOnInit(): void {}
}

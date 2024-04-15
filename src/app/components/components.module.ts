import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RouteHeaderComponent } from './route-header/route-header.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { PageSectionComponent } from './page-section/page-section.component';
import { CardsModule } from './cards/cards.module';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    RouteHeaderComponent,
    HeroBannerComponent,
    PageSectionComponent,
    CarouselComponent,
    SliderComponent,
  ],
  imports: [CardsModule, CommonModule, RouterModule],
  exports: [
    CardsModule,
    NavbarComponent,
    FooterComponent,
    RouteHeaderComponent,
    HeroBannerComponent,
    PageSectionComponent,
    CarouselComponent,
    SliderComponent,
  ],
})
export class ComponentsModule {}

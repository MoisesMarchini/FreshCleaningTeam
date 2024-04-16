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
import { GmapsLocalizationComponent } from './gmaps-localization/gmaps-localization.component';
import { SectionCardOverImageComponent } from './section-card-over-image/section-card-over-image.component';
import { BtnBackToTopComponent } from './btn-back-to-top/btn-back-to-top.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    RouteHeaderComponent,
    HeroBannerComponent,
    PageSectionComponent,
    CarouselComponent,
    GmapsLocalizationComponent,
    SectionCardOverImageComponent,
    BtnBackToTopComponent,
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
    GmapsLocalizationComponent,
    SectionCardOverImageComponent,
    BtnBackToTopComponent,
  ],
})
export class ComponentsModule {}

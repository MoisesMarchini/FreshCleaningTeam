import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.component';
import { AboutUsPage } from './about-us/about-us.component';
import { TermsOfUsePage } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyPage } from './privacy-policy/privacy-policy.component';
import { ComponentsModule } from '../components/components.module';
import { SectionsModule } from '../sections/sections.module';
import { GalleryPage } from './gallery/gallery.component';
import { CleaningTipsPage } from './cleaning-tips/cleaning-tips.component';
import { CleaningProcessPage } from './cleaning-process/cleaning-process.component';
import { FaqPage } from './faq/faq.component';
import { OurReviewsPage } from './our-reviews/our-reviews.component';

@NgModule({
  declarations: [
    HomePage,
    AboutUsPage,
    TermsOfUsePage,
    PrivacyPolicyPage,
    GalleryPage,
    CleaningTipsPage,
    CleaningProcessPage,
    FaqPage,
    OurReviewsPage,
  ],
  imports: [CommonModule, ComponentsModule, SectionsModule],
})
export class PagesModule {}

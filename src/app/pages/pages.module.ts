import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.component';
import { AboutUsPage } from './about-us/about-us.component';
import { TermsOfUsePage } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyPage } from './privacy-policy/privacy-policy.component';
import { ComponentsModule } from '../components/components.module';
import { SectionsModule } from '../sections/sections.module';
import { GalleryPage } from './gallery/gallery.component';
import { FaqPage } from './faq/faq.component';
import { OurReviewsPage } from './our-reviews/our-reviews.component';
import { CleaningTypesPage } from './cleaning-types/cleaning-types.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { SectionAnimDirective } from '../directives/section-anim.directive';

@NgModule({
  declarations: [
    HomePage,
    AboutUsPage,
    TermsOfUsePage,
    PrivacyPolicyPage,
    GalleryPage,
    FaqPage,
    OurReviewsPage,
    CleaningTypesPage,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SectionsModule,
    RouterModule,
    DirectivesModule,
  ],
  providers: [SectionAnimDirective],
})
export class PagesModule {}

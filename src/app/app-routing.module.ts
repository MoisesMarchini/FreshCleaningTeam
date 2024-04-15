import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { environment } from 'src/environments/environment';
import { AboutUsPage } from './pages/about-us/about-us.component';
import { TermsOfUsePage } from './pages/terms-of-use/terms-of-use.component';
import { PrivacyPolicyPage } from './pages/privacy-policy/privacy-policy.component';
import { GalleryPage } from './pages/gallery/gallery.component';
import { CleaningTipsPage } from './pages/cleaning-tips/cleaning-tips.component';
import { OurReviewsPage } from './pages/our-reviews/our-reviews.component';
import { FaqPage } from './pages/faq/faq.component';
import { CleaningProcessPage } from './pages/cleaning-process/cleaning-process.component';

const routes: Routes = [
  {
    path: environment.routes.home,
    component: HomePage,
  },
  {
    path: environment.routes.gallery,
    component: GalleryPage,
  },
  {
    path: environment.routes.cleaningTips,
    component: CleaningTipsPage,
  },
  {
    path: environment.routes.reviews,
    component: OurReviewsPage,
  },
  {
    path: environment.routes.faq,
    component: FaqPage,
  },
  {
    path: environment.routes.cleaningProcess,
    component: CleaningProcessPage,
  },
  {
    path: environment.routes.aboutUs,
    component: AboutUsPage,
  },
  {
    path: environment.routes.termsOfUse,
    component: TermsOfUsePage,
  },
  {
    path: environment.routes.privacyPolicy,
    component: PrivacyPolicyPage,
  },
  {
    path: '**',
    redirectTo: environment.routes.home,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

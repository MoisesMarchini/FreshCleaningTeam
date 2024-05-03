import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { environment } from 'src/environments/environment';
import { AboutUsPage } from './pages/about-us/about-us.component';
import { TermsOfUsePage } from './pages/terms-of-use/terms-of-use.component';
import { PrivacyPolicyPage } from './pages/privacy-policy/privacy-policy.component';
import { GalleryPage } from './pages/gallery/gallery.component';
import { OurReviewsPage } from './pages/our-reviews/our-reviews.component';
import { FaqPage } from './pages/faq/faq.component';
import { CleaningTypesPage } from './pages/cleaning-types/cleaning-types.component';

const routes: Routes = [
  {
    path: environment.routes.home,
    title: `${environment.defaultWebTitle} - Home`,
    component: HomePage,
  },
  {
    path: environment.routes.gallery,
    title: `${environment.defaultWebTitle} - Gallery`,
    component: GalleryPage,
  },
  {
    path: environment.routes.cleaningTypes,
    title: `${environment.defaultWebTitle} - Cleaning Types`,
    component: CleaningTypesPage,
  },
  {
    path: environment.routes.reviews,
    title: `${environment.defaultWebTitle} - Reviews`,
    component: OurReviewsPage,
  },
  {
    path: environment.routes.faq,
    title: `${environment.defaultWebTitle} - FAQ`,
    component: FaqPage,
  },
  {
    path: environment.routes.aboutUs,
    title: `${environment.defaultWebTitle} - About Us`,
    component: AboutUsPage,
  },
  {
    path: environment.routes.termsOfUse,
    title: `${environment.defaultWebTitle} - Terms Of Use`,
    component: TermsOfUsePage,
  },
  {
    path: environment.routes.privacyPolicy,
    title: `${environment.defaultWebTitle} - Privacy Police`,
    component: PrivacyPolicyPage,
  },
  {
    path: '**',
    redirectTo: environment.routes.home,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

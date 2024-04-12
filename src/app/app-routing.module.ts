import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { environment } from 'src/environments/environment';
import { AboutUsPage } from './pages/about-us/about-us.component';
import { ServicePage } from './pages/service/service.component';
import { ContactPage } from './pages/contact/contact.component';
import { TermsOfUsePage } from './pages/terms-of-use/terms-of-use.component';
import { PrivacyPolicyPage } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: environment.routes.home,
    component: HomePage
  },
  {
    path: environment.routes.aboutUs,
    component: AboutUsPage
  },
  {
    path: environment.routes.service,
    component: ServicePage
  },
  {
    path: environment.routes.contact,
    component: ContactPage
  },
  {
    path: environment.routes.termsOfUse,
    component: TermsOfUsePage
  },
  {
    path: environment.routes.privacyPolicy,
    component: PrivacyPolicyPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

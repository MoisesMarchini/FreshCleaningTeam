import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.component';
import { ServicePage } from './service/service.component';
import { AboutUsPage } from './about-us/about-us.component';
import { ContactPage } from './contact/contact.component';
import { TermsOfUsePage } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyPage } from './privacy-policy/privacy-policy.component';
import { ComponentsModule } from '../components/components.module';
import { SectionsModule } from '../sections/sections.module';

@NgModule({
  declarations: [
    HomePage,
    ServicePage,
    AboutUsPage,
    ContactPage,
    TermsOfUsePage,
    PrivacyPolicyPage,
  ],
  imports: [CommonModule, ComponentsModule, SectionsModule],
})
export class PagesModule {}

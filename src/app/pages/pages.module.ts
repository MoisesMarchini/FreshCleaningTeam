import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.component';
import { ServicePage } from './service/service.component';
import { AboutUsPage } from './about-us/about-us.component';
import { ContactPage } from './contact/contact.component';



@NgModule({
  declarations: [
    HomePage,
    ServicePage,
    AboutUsPage,
    ContactPage
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

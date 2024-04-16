import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComponentsModule } from '../components/components.module';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { OurServicesComponent } from './our-services/our-services.component';

@NgModule({
  declarations: [
    NewsletterComponent,
    AboutUsComponent,
    GetInTouchComponent,
    OurServicesComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [
    NewsletterComponent,
    AboutUsComponent,
    GetInTouchComponent,
    OurServicesComponent,
  ],
})
export class SectionsModule {}

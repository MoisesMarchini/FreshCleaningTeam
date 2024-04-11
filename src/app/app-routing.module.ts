import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { environment } from 'src/environments/environment';
import { AboutUsPage } from './pages/about-us/about-us.component';
import { ServicePage } from './pages/service/service.component';
import { ContactPage } from './pages/contact/contact.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

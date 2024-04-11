import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RouteHeaderComponent } from './route-header/route-header.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    RouteHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    RouteHeaderComponent
  ]
})
export class ComponentsModule { }

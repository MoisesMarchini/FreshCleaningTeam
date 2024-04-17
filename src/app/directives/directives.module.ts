import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionAnimDirective } from './section-anim.directive';



@NgModule({
  declarations: [
    SectionAnimDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionAnimDirective
  ]
})
export class DirectivesModule { }

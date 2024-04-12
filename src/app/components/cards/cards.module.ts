import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardIconComponent } from './card-icon/card-icon.component';
import { CardImageComponent } from './card-image/card-image.component';



@NgModule({
  declarations: [
    CardIconComponent,
    CardImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardIconComponent,
    CardImageComponent
  ]
})
export class CardsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardIconComponent } from './card-icon/card-icon.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardReviewComponent } from './card-review/card-review.component';



@NgModule({
  declarations: [
    CardIconComponent,
    CardImageComponent,
    CardReviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardIconComponent,
    CardImageComponent,
    CardReviewComponent
  ]
})
export class CardsModule { }

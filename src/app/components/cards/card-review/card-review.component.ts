import { Component, Input, OnInit } from '@angular/core';
import { CardReviewOptions } from '../card-options';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss'],
})
export class CardReviewComponent implements OnInit {
  @Input() options?: CardReviewOptions;
  reviewArray = [0, 1, 2, 3, 4];

  ngOnInit(): void {}
}

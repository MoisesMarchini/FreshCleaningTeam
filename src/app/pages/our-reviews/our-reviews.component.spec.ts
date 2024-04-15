import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurReviewsPage } from './our-reviews.component';

describe('OurReviewsComponent', () => {
  let component: OurReviewsPage;
  let fixture: ComponentFixture<OurReviewsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurReviewsPage],
    });
    fixture = TestBed.createComponent(OurReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPage } from './faq.component';

describe('FaqComponent', () => {
  let component: FaqPage;
  let fixture: ComponentFixture<FaqPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqPage],
    });
    fixture = TestBed.createComponent(FaqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

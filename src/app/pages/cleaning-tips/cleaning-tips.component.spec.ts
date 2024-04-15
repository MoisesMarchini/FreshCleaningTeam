import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningTipsPage } from './cleaning-tips.component';

describe('CleaningTipsComponent', () => {
  let component: CleaningTipsPage;
  let fixture: ComponentFixture<CleaningTipsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleaningTipsPage],
    });
    fixture = TestBed.createComponent(CleaningTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

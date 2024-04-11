import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPage } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsPage;
  let fixture: ComponentFixture<AboutUsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsPage]
    });
    fixture = TestBed.createComponent(AboutUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyPage } from './privacy-policy.component';

describe('PrivacyPolicyComponent', () => {
  let component: PrivacyPolicyPage;
  let fixture: ComponentFixture<PrivacyPolicyPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyPolicyPage]
    });
    fixture = TestBed.createComponent(PrivacyPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

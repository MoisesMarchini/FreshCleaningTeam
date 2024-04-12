import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfUsePage } from './terms-of-use.component';

describe('TermsOfUseComponent', () => {
  let component: TermsOfUsePage;
  let fixture: ComponentFixture<TermsOfUsePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsOfUsePage]
    });
    fixture = TestBed.createComponent(TermsOfUsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

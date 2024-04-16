import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBackToTopComponent } from './btn-back-to-top.component';

describe('BtnBackToTopComponent', () => {
  let component: BtnBackToTopComponent;
  let fixture: ComponentFixture<BtnBackToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnBackToTopComponent]
    });
    fixture = TestBed.createComponent(BtnBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCardOverImageComponent } from './section-card-over-image.component';

describe('SectionCardOverImageComponent', () => {
  let component: SectionCardOverImageComponent;
  let fixture: ComponentFixture<SectionCardOverImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCardOverImageComponent]
    });
    fixture = TestBed.createComponent(SectionCardOverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapsLocalizationComponent } from './gmaps-localization.component';

describe('GmapsLocalizationComponent', () => {
  let component: GmapsLocalizationComponent;
  let fixture: ComponentFixture<GmapsLocalizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmapsLocalizationComponent]
    });
    fixture = TestBed.createComponent(GmapsLocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

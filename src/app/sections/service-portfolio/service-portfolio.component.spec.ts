import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePortfolioComponent } from './service-portfolio.component';

describe('ServicePortfolioComponent', () => {
  let component: ServicePortfolioComponent;
  let fixture: ComponentFixture<ServicePortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicePortfolioComponent]
    });
    fixture = TestBed.createComponent(ServicePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

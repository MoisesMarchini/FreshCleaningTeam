import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePage } from './service.component';

describe('ServiceComponent', () => {
  let component: ServicePage;
  let fixture: ComponentFixture<ServicePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicePage]
    });
    fixture = TestBed.createComponent(ServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

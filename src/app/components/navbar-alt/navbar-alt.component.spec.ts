import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAltComponent } from './navbar-alt.component';

describe('NavbarAltComponent', () => {
  let component: NavbarAltComponent;
  let fixture: ComponentFixture<NavbarAltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAltComponent]
    });
    fixture = TestBed.createComponent(NavbarAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

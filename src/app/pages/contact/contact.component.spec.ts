import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPage } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactPage;
  let fixture: ComponentFixture<ContactPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPage]
    });
    fixture = TestBed.createComponent(ContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

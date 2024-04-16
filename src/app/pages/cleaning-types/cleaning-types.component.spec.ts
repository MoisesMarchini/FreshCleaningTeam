import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningTypesPage } from './cleaning-types.component';

describe('CleaningTypesComponent', () => {
  let component: CleaningTypesPage;
  let fixture: ComponentFixture<CleaningTypesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleaningTypesPage],
    });
    fixture = TestBed.createComponent(CleaningTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

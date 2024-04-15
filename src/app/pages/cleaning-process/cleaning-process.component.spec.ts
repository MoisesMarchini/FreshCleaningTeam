import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningProcessPage } from './cleaning-process.component';

describe('CleaningProcessComponent', () => {
  let component: CleaningProcessPage;
  let fixture: ComponentFixture<CleaningProcessPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleaningProcessPage],
    });
    fixture = TestBed.createComponent(CleaningProcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

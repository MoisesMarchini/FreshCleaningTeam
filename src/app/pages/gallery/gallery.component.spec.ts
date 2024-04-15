import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPage } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryPage;
  let fixture: ComponentFixture<GalleryPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryPage],
    });
    fixture = TestBed.createComponent(GalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

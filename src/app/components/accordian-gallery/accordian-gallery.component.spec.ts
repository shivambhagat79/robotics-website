import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianGalleryComponent } from './accordian-gallery.component';

describe('AccordianGalleryComponent', () => {
  let component: AccordianGalleryComponent;
  let fixture: ComponentFixture<AccordianGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

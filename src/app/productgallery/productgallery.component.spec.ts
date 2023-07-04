import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgalleryComponent } from './productgallery.component';

describe('ProductgalleryComponent', () => {
  let component: ProductgalleryComponent;
  let fixture: ComponentFixture<ProductgalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductgalleryComponent]
    });
    fixture = TestBed.createComponent(ProductgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

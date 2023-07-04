import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemincartComponent } from './itemincart.component';

describe('ItemincartComponent', () => {
  let component: ItemincartComponent;
  let fixture: ComponentFixture<ItemincartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemincartComponent]
    });
    fixture = TestBed.createComponent(ItemincartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

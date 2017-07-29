import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCategoryComponent } from './beer-category.component';

describe('BeerCategoryComponent', () => {
  let component: BeerCategoryComponent;
  let fixture: ComponentFixture<BeerCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

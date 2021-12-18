import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRentalComponent } from './list-rental.component';

describe('ListRentalComponent', () => {
  let component: ListRentalComponent;
  let fixture: ComponentFixture<ListRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

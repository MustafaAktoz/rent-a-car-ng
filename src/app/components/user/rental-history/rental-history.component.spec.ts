import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalHistoryComponent } from './rental-history.component';

describe('RentalHistoryComponent', () => {
  let component: RentalHistoryComponent;
  let fixture: ComponentFixture<RentalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

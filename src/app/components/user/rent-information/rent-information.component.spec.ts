import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentInformationComponent } from './rent-information.component';

describe('RentInformationComponent', () => {
  let component: RentInformationComponent;
  let fixture: ComponentFixture<RentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNumberInputComponent } from './small-number-input.component';

describe('SmallNumberInputComponent', () => {
  let component: SmallNumberInputComponent;
  let fixture: ComponentFixture<SmallNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallNumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

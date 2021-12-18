import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementOptionsComponent } from './management-options.component';

describe('ManagementOptionsComponent', () => {
  let component: ManagementOptionsComponent;
  let fixture: ComponentFixture<ManagementOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

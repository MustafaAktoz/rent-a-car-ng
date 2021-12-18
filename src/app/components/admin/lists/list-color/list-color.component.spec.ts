import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColorComponent } from './list-color.component';

describe('ListColorComponent', () => {
  let component: ListColorComponent;
  let fixture: ComponentFixture<ListColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

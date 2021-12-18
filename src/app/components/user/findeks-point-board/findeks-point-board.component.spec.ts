import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindeksPointBoardComponent } from './findeks-point-board.component';

describe('FindeksPointBoardComponent', () => {
  let component: FindeksPointBoardComponent;
  let fixture: ComponentFixture<FindeksPointBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindeksPointBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindeksPointBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

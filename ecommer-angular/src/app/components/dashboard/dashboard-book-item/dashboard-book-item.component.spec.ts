import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBookItemComponent } from './dashboard-book-item.component';

describe('DashboardBookItemComponent', () => {
  let component: DashboardBookItemComponent;
  let fixture: ComponentFixture<DashboardBookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBookItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

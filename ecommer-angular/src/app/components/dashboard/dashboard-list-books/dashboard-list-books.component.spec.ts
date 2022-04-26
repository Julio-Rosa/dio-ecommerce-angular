import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListBooksComponent } from './dashboard-list-books.component';

describe('DashboardListBooksComponent', () => {
  let component: DashboardListBooksComponent;
  let fixture: ComponentFixture<DashboardListBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

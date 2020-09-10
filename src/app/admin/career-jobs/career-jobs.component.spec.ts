import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerJObsComponent } from './career-jobs.component';

describe('CareerJObsComponent', () => {
  let component: CareerJObsComponent;
  let fixture: ComponentFixture<CareerJObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerJObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerJObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

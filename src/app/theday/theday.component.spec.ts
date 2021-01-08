import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThedayComponent } from './theday.component';

describe('ThedayComponent', () => {
  let component: ThedayComponent;
  let fixture: ComponentFixture<ThedayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThedayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

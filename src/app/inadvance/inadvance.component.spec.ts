import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InadvanceComponent } from './inadvance.component';

describe('InadvanceComponent', () => {
  let component: InadvanceComponent;
  let fixture: ComponentFixture<InadvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InadvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InadvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

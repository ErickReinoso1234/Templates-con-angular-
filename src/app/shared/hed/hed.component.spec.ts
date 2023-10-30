import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedComponent } from './hed.component';

describe('HedComponent', () => {
  let component: HedComponent;
  let fixture: ComponentFixture<HedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HedComponent]
    });
    fixture = TestBed.createComponent(HedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/* Erick Reinoso */

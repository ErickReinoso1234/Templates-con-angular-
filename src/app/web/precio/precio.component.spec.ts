import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioComponent } from './precio.component';

describe('PrecioComponent', () => {
  let component: PrecioComponent;
  let fixture: ComponentFixture<PrecioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecioComponent]
    });
    fixture = TestBed.createComponent(PrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

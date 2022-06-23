import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidebar2Component } from './slidebar2.component';

describe('Slidebar2Component', () => {
  let component: Slidebar2Component;
  let fixture: ComponentFixture<Slidebar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Slidebar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Slidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

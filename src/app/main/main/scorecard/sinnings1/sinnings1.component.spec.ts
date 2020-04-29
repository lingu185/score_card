import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinnings1Component } from './sinnings1.component';

describe('Sinnings1Component', () => {
  let component: Sinnings1Component;
  let fixture: ComponentFixture<Sinnings1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sinnings1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinnings1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

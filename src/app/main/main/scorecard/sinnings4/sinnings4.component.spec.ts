import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinnings4Component } from './sinnings4.component';

describe('Sinnings4Component', () => {
  let component: Sinnings4Component;
  let fixture: ComponentFixture<Sinnings4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sinnings4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinnings4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

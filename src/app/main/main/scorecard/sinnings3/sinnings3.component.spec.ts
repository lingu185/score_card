import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinnings3Component } from './sinnings3.component';

describe('Sinnings3Component', () => {
  let component: Sinnings3Component;
  let fixture: ComponentFixture<Sinnings3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sinnings3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinnings3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

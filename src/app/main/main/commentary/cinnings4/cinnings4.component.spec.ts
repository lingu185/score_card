import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cinnings4Component } from './cinnings4.component';

describe('Cinnings4Component', () => {
  let component: Cinnings4Component;
  let fixture: ComponentFixture<Cinnings4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cinnings4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cinnings4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

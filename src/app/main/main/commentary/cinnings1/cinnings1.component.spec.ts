import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cinnings1Component } from './cinnings1.component';

describe('Cinnings1Component', () => {
  let component: Cinnings1Component;
  let fixture: ComponentFixture<Cinnings1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cinnings1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cinnings1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

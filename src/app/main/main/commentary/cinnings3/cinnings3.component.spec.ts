import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cinnings3Component } from './cinnings3.component';

describe('Cinnings3Component', () => {
  let component: Cinnings3Component;
  let fixture: ComponentFixture<Cinnings3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cinnings3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cinnings3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

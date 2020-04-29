import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinnings2Component } from './sinnings2.component';

describe('Sinnings2Component', () => {
  let component: Sinnings2Component;
  let fixture: ComponentFixture<Sinnings2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sinnings2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinnings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

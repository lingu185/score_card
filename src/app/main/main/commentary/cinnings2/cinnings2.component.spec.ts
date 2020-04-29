import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cinnings2Component } from './cinnings2.component';

describe('Cinnings2Component', () => {
  let component: Cinnings2Component;
  let fixture: ComponentFixture<Cinnings2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cinnings2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cinnings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

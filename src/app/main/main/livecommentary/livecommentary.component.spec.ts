import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecommentaryComponent } from './livecommentary.component';

describe('LivecommentaryComponent', () => {
  let component: LivecommentaryComponent;
  let fixture: ComponentFixture<LivecommentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivecommentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivecommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

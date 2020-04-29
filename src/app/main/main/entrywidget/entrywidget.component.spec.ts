import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrywidgetComponent } from './entrywidget.component';

describe('EntrywidgetComponent', () => {
  let component: EntrywidgetComponent;
  let fixture: ComponentFixture<EntrywidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrywidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrywidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

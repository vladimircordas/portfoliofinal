import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeplanComponent } from './escapeplan.component';

describe('EscapeplanComponent', () => {
  let component: EscapeplanComponent;
  let fixture: ComponentFixture<EscapeplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

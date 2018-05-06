import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherworkComponent } from './otherwork.component';

describe('OtherworkComponent', () => {
  let component: OtherworkComponent;
  let fixture: ComponentFixture<OtherworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

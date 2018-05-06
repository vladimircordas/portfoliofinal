import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyprincessComponent } from './disneyprincess.component';

describe('DisneyprincessComponent', () => {
  let component: DisneyprincessComponent;
  let fixture: ComponentFixture<DisneyprincessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisneyprincessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyprincessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

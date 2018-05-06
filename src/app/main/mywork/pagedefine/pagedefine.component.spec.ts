import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedefineComponent } from './pagedefine.component';

describe('PagedefineComponent', () => {
  let component: PagedefineComponent;
  let fixture: ComponentFixture<PagedefineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedefineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

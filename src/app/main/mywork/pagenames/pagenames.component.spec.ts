import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenamesComponent } from './pagenames.component';

describe('PagenamesComponent', () => {
  let component: PagenamesComponent;
  let fixture: ComponentFixture<PagenamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

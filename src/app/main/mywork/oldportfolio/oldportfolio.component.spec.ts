import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldportfolioComponent } from './oldportfolio.component';

describe('OldportfolioComponent', () => {
  let component: OldportfolioComponent;
  let fixture: ComponentFixture<OldportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

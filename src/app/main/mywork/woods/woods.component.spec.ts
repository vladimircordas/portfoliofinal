import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodsComponent } from './woods.component';

describe('WoodsComponent', () => {
  let component: WoodsComponent;
  let fixture: ComponentFixture<WoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

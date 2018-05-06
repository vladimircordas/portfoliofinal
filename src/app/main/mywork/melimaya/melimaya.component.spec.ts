import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelimayaComponent } from './melimaya.component';

describe('MelimayaComponent', () => {
  let component: MelimayaComponent;
  let fixture: ComponentFixture<MelimayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelimayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelimayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

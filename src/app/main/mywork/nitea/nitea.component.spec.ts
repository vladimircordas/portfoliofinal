import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiteaComponent } from './nitea.component';

describe('NiteaComponent', () => {
  let component: NiteaComponent;
  let fixture: ComponentFixture<NiteaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiteaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

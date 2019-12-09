import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOneComponent } from './num-one.component';

describe('NumOneComponent', () => {
  let component: NumOneComponent;
  let fixture: ComponentFixture<NumOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

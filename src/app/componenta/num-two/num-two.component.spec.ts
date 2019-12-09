import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumTwoComponent } from './num-two.component';

describe('NumTwoComponent', () => {
  let component: NumTwoComponent;
  let fixture: ComponentFixture<NumTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

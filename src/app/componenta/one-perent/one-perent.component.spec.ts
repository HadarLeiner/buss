import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePerentComponent } from './one-perent.component';

describe('OnePerentComponent', () => {
  let component: OnePerentComponent;
  let fixture: ComponentFixture<OnePerentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePerentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePerentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

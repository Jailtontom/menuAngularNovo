import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAstronautComponent } from './app-astronaut.component';

describe('AppAstronautComponent', () => {
  let component: AppAstronautComponent;
  let fixture: ComponentFixture<AppAstronautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAstronautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAstronautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

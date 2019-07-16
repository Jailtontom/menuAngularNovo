import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMissionControlComponent } from './app-mission-control.component';

describe('AppMissionControlComponent', () => {
  let component: AppMissionControlComponent;
  let fixture: ComponentFixture<AppMissionControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMissionControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMissionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

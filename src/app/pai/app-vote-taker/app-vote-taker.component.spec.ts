import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVoteTakerComponent } from './app-vote-taker.component';

describe('AppVoteTakerComponent', () => {
  let component: AppVoteTakerComponent;
  let fixture: ComponentFixture<AppVoteTakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppVoteTakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVoteTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

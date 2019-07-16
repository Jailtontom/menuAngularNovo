import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPrincipalComponent } from './dialog-principal.component';

describe('DialogPrincipalComponent', () => {
  let component: DialogPrincipalComponent;
  let fixture: ComponentFixture<DialogPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

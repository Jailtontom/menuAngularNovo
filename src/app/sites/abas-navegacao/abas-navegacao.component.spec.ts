import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbasNavegacaoComponent } from './abas-navegacao.component';

describe('AbasNavegacaoComponent', () => {
  let component: AbasNavegacaoComponent;
  let fixture: ComponentFixture<AbasNavegacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbasNavegacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbasNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

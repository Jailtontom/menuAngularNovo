import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbasNavegacaoCComponent } from './abas-navegacao.component';

describe('AbasNavegacaoComponent', () => {
  let component: AbasNavegacaoCComponent;
  let fixture: ComponentFixture<AbasNavegacaoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbasNavegacaoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbasNavegacaoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

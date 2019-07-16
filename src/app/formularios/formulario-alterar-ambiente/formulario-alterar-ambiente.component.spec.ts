import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlterarAmbienteComponent } from './formulario-alterar-ambiente.component';

describe('FormularioAlterarAmbienteComponent', () => {
  let component: FormularioAlterarAmbienteComponent;
  let fixture: ComponentFixture<FormularioAlterarAmbienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAlterarAmbienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAlterarAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

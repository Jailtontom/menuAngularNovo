import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoIncluirComponent } from './botao-incluir.component';

describe('BotaoIncluirComponent', () => {
  let component: BotaoIncluirComponent;
  let fixture: ComponentFixture<BotaoIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

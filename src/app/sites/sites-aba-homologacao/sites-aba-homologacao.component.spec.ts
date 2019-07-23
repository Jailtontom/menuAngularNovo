import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesAbaHomologacaoComponent } from './sites-aba-homologacao.component';

describe('SitesAbaHomologacaoComponent', () => {
  let component: SitesAbaHomologacaoComponent;
  let fixture: ComponentFixture<SitesAbaHomologacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesAbaHomologacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesAbaHomologacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

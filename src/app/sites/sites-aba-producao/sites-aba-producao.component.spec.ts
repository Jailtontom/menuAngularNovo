import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesAbaProducaoComponent } from './sites-aba-producao.component';

describe('SitesAbaProducaoComponent', () => {
  let component: SitesAbaProducaoComponent;
  let fixture: ComponentFixture<SitesAbaProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesAbaProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesAbaProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

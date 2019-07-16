import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesAbaDesenvolvimentoComponent } from './sites-aba-desenvolvimento.component';

describe('SitesAbaDesenvolvimentoComponent', () => {
  let component: SitesAbaDesenvolvimentoComponent;
  let fixture: ComponentFixture<SitesAbaDesenvolvimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesAbaDesenvolvimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesAbaDesenvolvimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

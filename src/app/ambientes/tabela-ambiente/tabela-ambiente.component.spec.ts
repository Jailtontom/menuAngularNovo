import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAmbienteComponent } from './tabela-ambiente.component';

describe('TabelaAmbienteComponent', () => {
    let component: TabelaAmbienteComponent;
    let fixture: ComponentFixture<TabelaAmbienteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TabelaAmbienteComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabelaAmbienteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

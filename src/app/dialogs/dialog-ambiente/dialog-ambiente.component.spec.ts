import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAmbienteComponent } from './dialog-ambiente.component';

describe('DialogAmbienteComponent', () => {
    let component: DialogAmbienteComponent;
    let fixture: ComponentFixture<DialogAmbienteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DialogAmbienteComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DialogAmbienteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

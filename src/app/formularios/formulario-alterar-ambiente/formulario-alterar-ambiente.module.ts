import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';

import { FormularioAlterarAmbienteComponent } from './formulario-alterar-ambiente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormularioAlterarAmbienteComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule
    ],
    exports: [
        FormularioAlterarAmbienteComponent
    ]
})
export class FormularioAlterarAmbienteModule { }

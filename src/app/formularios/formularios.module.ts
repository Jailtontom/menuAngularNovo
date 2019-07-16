import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosComponent } from './formularios.component';
import { FormularioAlterarAmbienteModule } from './formulario-alterar-ambiente/formulario-alterar-ambiente.module';

@NgModule({
    declarations: [
        FormulariosComponent
    ],
    imports: [
        CommonModule,
        FormularioAlterarAmbienteModule
    ],
    exports: [
        FormulariosComponent
    ]
})
export class FormulariosModule { }

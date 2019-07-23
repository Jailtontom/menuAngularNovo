import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegundaComponent } from './segunda.component';
import { AbasNavegacaoModule } from 'src/app/sites/abas-navegacao/abas-navegacao.module';

@NgModule({
    declarations: [
        SegundaComponent
    ],
    imports: [
        CommonModule,
        AbasNavegacaoModule
    ],
    exports: [SegundaComponent]
})
export class SegundaModule { }
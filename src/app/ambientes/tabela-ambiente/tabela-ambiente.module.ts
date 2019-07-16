import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { TabelaAmbienteComponent } from './tabela-ambiente.component';
import { BotoesModule } from 'src/app/compartilhado/botoes/botoes.module';

@NgModule({
    declarations: [
        TabelaAmbienteComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        BotoesModule
    ],
    exports: [
        TabelaAmbienteComponent
    ]
})
export class TabelaAmbienteModule { }

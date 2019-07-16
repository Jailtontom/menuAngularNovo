import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuartaComponent } from './quarta.component';
import { AmbientesModule } from 'src/app/ambientes/ambientes.module';
import { AbasNavegacaoCModule } from 'src/app/compartilhado/abas-navegacao/abas-navegacao.module';
import { TabelaAmbienteModule } from 'src/app/ambientes/tabela-ambiente/tabela-ambiente.module';
import { BotoesModule } from 'src/app/compartilhado/botoes/botoes.module';

@NgModule({
    declarations: [
        QuartaComponent
    ],
    imports: [
        CommonModule,
        AmbientesModule,
        AbasNavegacaoCModule,
        BotoesModule,
        TabelaAmbienteModule
    ],
    exports: [
        QuartaComponent
    ]
})
export class QuartaModule { }
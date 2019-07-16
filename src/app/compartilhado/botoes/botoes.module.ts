import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotoesComponent } from './botoes.component';
import { BotaoAlterarModule } from './botao-alterar/botao-alterar.module';
import { BotaoAlterarComponent } from './botao-alterar/botao-alterar.component';
import { BotaoIncluirComponent } from './botao-incluir/botao-incluir.component';
import { BotaoDeletarComponent } from './botao-deletar/botao-deletar.component';
import { BotaoDeletarModule } from './botao-deletar/botao-deletar.module';
import { BotaoIncluirModule } from './botao-incluir/botao-incluir.module';

@NgModule({
    declarations: [
        BotoesComponent
    ],
    imports: [
        CommonModule,
        BotaoIncluirModule,
        BotaoAlterarModule,
        BotaoDeletarModule
    ],
    exports: [
        BotoesComponent,
        BotaoIncluirComponent,
        BotaoAlterarComponent,
        BotaoDeletarComponent
    ]
})
export class BotoesModule { }

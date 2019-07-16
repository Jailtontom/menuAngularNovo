import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotoesComponent } from './botoes/botoes.component';
import { BotaoAlterarComponent } from './botoes/botao-alterar/botao-alterar.component';

@NgModule({
    declarations: [
        BotoesComponent,
        BotaoAlterarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CompartilhadoModule { }
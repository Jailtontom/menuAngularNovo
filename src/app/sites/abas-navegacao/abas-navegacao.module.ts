import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbasNavegacaoComponent } from './abas-navegacao.component';
import { MatTabsModule } from '@angular/material';
import { SitesAbaDesenvolvimentoModule } from '../sites-aba-desenvolvimento/sites-aba-desenvolvimento.module';

@NgModule({
    declarations: [
        AbasNavegacaoComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        SitesAbaDesenvolvimentoModule
    ],
    exports: [
        AbasNavegacaoComponent
    ]
})
export class AbasNavegacaoModule { }

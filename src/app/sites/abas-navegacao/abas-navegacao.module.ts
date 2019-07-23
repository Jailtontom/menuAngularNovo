import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { AbasNavegacaoComponent } from './abas-navegacao.component';
import { SitesAbaDesenvolvimentoModule } from '../sites-aba-desenvolvimento/sites-aba-desenvolvimento.module';
import { SitesAbaHomologacaoModule } from '../sites-aba-homologacao/sites-aba-homologacao.module';
import { SitesAbaProducaoModule } from '../sites-aba-producao/sites-aba-producao.module';

@NgModule({
    declarations: [
        AbasNavegacaoComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        SitesAbaDesenvolvimentoModule,
        SitesAbaHomologacaoModule,
        SitesAbaProducaoModule
    ],
    exports: [
        AbasNavegacaoComponent
    ]
})
export class AbasNavegacaoModule { }

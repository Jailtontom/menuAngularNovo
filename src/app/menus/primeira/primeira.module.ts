import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PrimeiraComponent } from './primeira.component';
import { AbasNavegacaoModule } from 'src/app/sites/abas-navegacao/abas-navegacao.module';

@NgModule({
    declarations: [
            PrimeiraComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AbasNavegacaoModule
    ],
    exports: [PrimeiraComponent]
})
export class PrimeiraModule { }
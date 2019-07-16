import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegundaComponent } from './segunda.component';
import { SitesComponent } from 'src/app/sites/sites.component';
import { AbasNavegacaoModule } from 'src/app/sites/abas-navegacao/abas-navegacao.module';

@NgModule({
    declarations: [
        SegundaComponent,
        SitesComponent
    ],
    imports: [
        CommonModule,
        AbasNavegacaoModule
    ],
    exports: [SegundaComponent]
})
export class SegundaModule { }
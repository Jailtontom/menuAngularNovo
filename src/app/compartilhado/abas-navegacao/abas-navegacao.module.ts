import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { AbasNavegacaoCComponent } from './abas-navegacao.component';

@NgModule({
    declarations: [
        AbasNavegacaoCComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule
    ],
    exports: [
        AbasNavegacaoCComponent
    ]
})
export class AbasNavegacaoCModule { }

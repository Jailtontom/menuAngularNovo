import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { SitesAbaProducaoComponent } from './sites-aba-producao.component';

@NgModule({
    declarations: [
        SitesAbaProducaoComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    exports: [
        SitesAbaProducaoComponent
    ]
})
export class SitesAbaProducaoModule { }

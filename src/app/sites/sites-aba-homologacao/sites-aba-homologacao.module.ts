import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { SitesAbaHomologacaoComponent } from './sites-aba-homologacao.component';

@NgModule({
    declarations: [
        SitesAbaHomologacaoComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    exports: [
        SitesAbaHomologacaoComponent
    ]
})
export class SitesAbaHomologacaoModule { }

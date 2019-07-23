import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesAbaDesenvolvimentoComponent } from './sites-aba-desenvolvimento.component';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
    declarations: [
        SitesAbaDesenvolvimentoComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
    exports: [
        SitesAbaDesenvolvimentoComponent
    ]
})
export class SitesAbaDesenvolvimentoModule { }

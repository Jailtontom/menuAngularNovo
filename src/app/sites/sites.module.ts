import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesComponent } from './sites.component';
import { SitesAbaDesenvolvimentoModule } from './sites-aba-desenvolvimento/sites-aba-desenvolvimento.module';

@NgModule({
    declarations: [
        SitesComponent
    ],
    imports: [
        CommonModule,
        SitesModule,
        SitesAbaDesenvolvimentoModule
    ],
    exports: [
        SitesComponent
    ]
})
export class SitesModule { }
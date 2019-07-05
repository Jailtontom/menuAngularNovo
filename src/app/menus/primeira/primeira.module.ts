import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PrimeiraComponent } from './primeira.component';

@NgModule({
    declarations: [PrimeiraComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [PrimeiraComponent]
})
export class PrimeiraModule { }
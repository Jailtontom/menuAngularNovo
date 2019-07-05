import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NavegadorComponent } from './navegador.component';

@NgModule({
    declarations: [NavegadorComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [NavegadorComponent]
})
export class NavegadorModule { }
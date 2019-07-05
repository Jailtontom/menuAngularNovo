import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NavegadorModule } from './navegador/navegador.module';
import { PrimeiraModule } from './primeira/primeira.module';
import { SegundaModule } from './segunda/segunda.module';
import { TerceiraModule } from './terceira/terceira.module';
import { QuartaModule } from './quarta/quarta.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        NavegadorModule,
        PrimeiraModule,
        SegundaModule,
        TerceiraModule,
        QuartaModule
    ]
})
export class MenusModule { }
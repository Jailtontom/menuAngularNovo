import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AmbientesComponent } from './ambientes.component';

@NgModule({
    declarations: [
        AmbientesComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        AmbientesComponent
    ]
})
export class AmbientesModule { }

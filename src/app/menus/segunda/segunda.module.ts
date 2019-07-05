import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SegundaComponent } from './segunda.component';

@NgModule({
    declarations: [SegundaComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [SegundaComponent]
})
export class SegundaModule { }
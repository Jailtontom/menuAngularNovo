import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { QuartaComponent } from './quarta.component';

@NgModule({
    declarations: [QuartaComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [QuartaComponent]
})
export class QuartaModule { }
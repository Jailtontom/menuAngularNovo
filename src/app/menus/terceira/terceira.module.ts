import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TerceiraComponent } from './terceira.component';

@NgModule({
    declarations: [TerceiraComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [TerceiraComponent]
})
export class TerceiraModule { }
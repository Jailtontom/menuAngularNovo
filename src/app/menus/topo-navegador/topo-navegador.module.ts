import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoNavegadorComponent } from './topo-navegador.component';

@NgModule({
    declarations: [TopoNavegadorComponent],
    imports: [
        CommonModule
    ],
    exports: [ TopoNavegadorComponent ]
})
export class TopoNavegadorModule { }
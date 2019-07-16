import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAstronautComponent } from './app-astronaut.component';

@NgModule({
    declarations: [AppAstronautComponent],
    imports: [
        CommonModule
    ],
    exports: [AppAstronautComponent]
})
export class AppAstronautModule { }
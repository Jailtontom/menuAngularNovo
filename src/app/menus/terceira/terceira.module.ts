import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TerceiraComponent } from './terceira.component';
import { AppMissionControlComponent } from 'src/app/astronautas/app-mission-control/app-mission-control.component';
import { AppAstronautComponent } from 'src/app/astronautas/app-astronaut/app-astronaut.component';

@NgModule({
    declarations: [
        TerceiraComponent,
        AppMissionControlComponent,
        AppAstronautComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        TerceiraComponent,
        AppMissionControlComponent,
        AppAstronautComponent
    ]
})
export class TerceiraModule { }
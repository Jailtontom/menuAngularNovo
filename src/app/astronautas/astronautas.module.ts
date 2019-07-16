import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMissionControlModule } from './app-mission-control/app-mission-control.module';
import { AppAstronautModule } from './app-astronaut/app-astronaut.module';

@NgModule({
    imports: [
        CommonModule,
        AppMissionControlModule,
        AppAstronautModule
    ]
})
export class AstronautasModule { }
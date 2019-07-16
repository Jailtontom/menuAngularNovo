import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMissionControlComponent } from './app-mission-control.component';

@NgModule({
    declarations: [AppMissionControlComponent],
    imports: [
        CommonModule
    ],
    exports: [AppMissionControlComponent]
})
export class AppMissionControlModule { }
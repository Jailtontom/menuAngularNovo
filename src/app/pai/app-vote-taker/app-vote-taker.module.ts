import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppVoteTakerComponent } from './app-vote-taker.component';

@NgModule({
    declarations: [AppVoteTakerComponent],
    imports: [
        CommonModule
    ],
    exports: [AppVoteTakerComponent]
})
export class AppVoteTakerModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppVoteTakerModule } from './app-vote-taker/app-vote-taker.module';
import { VoterModule } from './voter/voter.module';

@NgModule({
    imports: [
        CommonModule,
        AppVoteTakerModule,
        VoterModule
    ]
})
export class PaiModule { }
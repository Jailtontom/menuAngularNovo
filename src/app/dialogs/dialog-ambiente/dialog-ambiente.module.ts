import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { DialogAmbienteComponent } from './dialog-ambiente.component';
import { DialogPrincipalModule } from '../dialog-principal/dialog-principal.module';

@NgModule({
    declarations: [
        DialogAmbienteComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        DialogPrincipalModule
    ],
    exports: [
        DialogAmbienteComponent
    ],
    entryComponents: [
        DialogAmbienteComponent
    ],
    bootstrap: [
        DialogAmbienteComponent
    ]
})
export class DialogAmbienteModule { }

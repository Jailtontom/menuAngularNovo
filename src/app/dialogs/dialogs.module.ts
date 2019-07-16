import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogAmbienteModule } from './dialog-ambiente/dialog-ambiente.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { DialogPrincipalModule } from './dialog-principal/dialog-principal.module';

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        DialogAmbienteModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        DialogPrincipalModule
    ],
    exports: [
        FormsModule,
        MatInputModule,
        DialogAmbienteModule,
        DialogPrincipalModule
    ]
})
export class DialogsModule { }
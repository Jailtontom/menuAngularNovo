import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDialogModule, MatInputModule } from '@angular/material';

import { DialogPrincipalComponent } from './dialog-principal.component';

@NgModule({
    declarations: [
        DialogPrincipalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
    ],
    exports: [
        DialogPrincipalComponent
    ],
    entryComponents: [
        DialogPrincipalComponent
    ]
})
export class DialogPrincipalModule { }

import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Ambiente } from 'src/app/ambientes/ambiente';

@Component({
    selector: 'app-dialog-principal',
    templateUrl: './dialog-principal.component.html',
    styleUrls: ['./dialog-principal.component.css']
})
export class DialogPrincipalComponent implements OnInit {

    @Input() name: string;

    constructor(
        public dialogRef: MatDialogRef<DialogPrincipalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Ambiente) { }

    ngOnInit() { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}

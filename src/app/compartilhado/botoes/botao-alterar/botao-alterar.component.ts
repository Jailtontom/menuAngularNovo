import { Component, OnInit, Input } from '@angular/core';

import { DialogsService } from 'src/app/dialogs/dialogs.service';
import { Botoes } from '../botoes';

@Component({
    selector: 'app-botao-alterar',
    templateUrl: './botao-alterar.component.html',
    styleUrls: ['./botao-alterar.component.css']
})
export class BotaoAlterarComponent implements OnInit, Botoes {

    @Input() desenvolvimento: string;
    @Input() homologacao: string;
    @Input() producao: string;

    constructor(private dialogsService: DialogsService) { }

    ngOnInit(): void { }

    dialogoAberto(): void {
        this.dialogsService.dialogoAberto(this.desenvolvimento, this.homologacao, this.producao);
    }

}

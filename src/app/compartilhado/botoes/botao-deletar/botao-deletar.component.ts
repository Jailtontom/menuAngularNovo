import { Component, OnInit } from '@angular/core';
import { Botoes } from '../botoes';

@Component({
    selector: 'app-botao-deletar',
    templateUrl: './botao-deletar.component.html',
    styleUrls: ['./botao-deletar.component.css']
})
export class BotaoDeletarComponent implements OnInit, Botoes {

    constructor() { }

    ngOnInit() {
    }

    dialogoAberto(): void {
    }

}

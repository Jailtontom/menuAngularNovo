import { Component, OnInit } from '@angular/core';
import { Botoes } from '../botoes';

@Component({
    selector: 'app-botao-incluir',
    templateUrl: './botao-incluir.component.html',
    styleUrls: ['./botao-incluir.component.css']
})
export class BotaoIncluirComponent implements OnInit, Botoes {

    constructor() { }

    ngOnInit() {
    }

    dialogoAberto(): void {
    }

}

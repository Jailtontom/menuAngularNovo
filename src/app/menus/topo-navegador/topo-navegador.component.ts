import { Component, OnInit } from '@angular/core';

import { NavegadorService } from '../navegador/navegador.service';

@Component({
    selector: 'app-topo-navegador',
    templateUrl: './topo-navegador.component.html',
    styleUrls: ['./topo-navegador.component.scss']
})
export class TopoNavegadorComponent implements OnInit {

    constructor(public navegadorService: NavegadorService) { }

    ngOnInit() { }

}
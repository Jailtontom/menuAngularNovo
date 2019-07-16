import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { VERSION } from '@angular/material';

import { MenuService } from './menus/menu/menu.service';
import { Menu } from './menus/menu/menu';
import { NavegadorService } from './menus/navegador/navegador.service';

@Component({
    selector: 'app-ma-raiz',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('appDrawer', { static: true }) appDrawer: ElementRef;
    version = VERSION;

    menu: Menu[] = [];

    constructor(private navegadorService: NavegadorService, private menuService: MenuService) { }

    ngOnInit(): void {
        this.menuService.listaMenus().subscribe(menu => {
            this.menu = this.menuService.montaMenu(menu);
        });
    }

    ngAfterViewInit() {
        this.navegadorService.appDrawer = this.appDrawer;
    }
}
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

    menu: Menu[] = [
        {
            "displayName": "Início",
            "iconName": "",
            "route": ""
        },
        {
            "displayName": "Sites",
            "iconName": "recent_actors",
            "route": "",
            "children": [
                {
                    "displayName": "Portonet",
                    "iconName": "",
                    "route": "devfestfl/speakers/stephen-fluin/what-up-web"
                }
            ]
        },
        {
            "displayName": "Painel de Administração",
            "iconName": "person",
            "route": "",
            "children": [
                {
                    "displayName": "Gerenciar Sites",
                    "iconName": "",
                    "route": "devfestfl/speakers/mike-brocchi/my-ally-cli"
                },
                {
                    "displayName": "Listar Permissões",
                    "iconName": "",
                    "route": ""
                }
            ]
        },
        {
            "displayName": "Ambientes",
            "iconName": "star_rate",
            "route": "devfestfl/speakers/mike-brocchi/become-angular-tailer"
        },
        {
            "displayName": "Auditoria",
            "iconName": "speaker_notes",
            "route": "",
            "children": [
                {
                    "displayName": "Console",
                    "iconName": "",
                    "route": ""
                },
                {
                    "displayName": "portonet",
                    "iconName": "",
                    "route": ""
                }
            ]
        },
        {
            "displayName": "Logout",
            "iconName": "feedback",
            "route": ""
        }
    ];

    constructor(private navegadorService: NavegadorService) { }

    ngOnInit(): void { }

    ngAfterViewInit() {
        this.navegadorService.appDrawer = this.appDrawer;
    }
}
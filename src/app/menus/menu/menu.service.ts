import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Menu } from './menu';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class MenuService {
    constructor(private http: HttpClient) { }

    listaMenus() {
        return this.http.get<Menu[]>(API);
    }

    montaMenu(menu: Menu[]) {
        var novoMenu: Menu[] = [];

        for (let i = 0; i < menu.length; i++) {
            var essaDisplayName = menu[i].displayName;
            var essaIconName = menu[i].iconName;
            var essaRoute = menu[i].route;
            var essaChildren = menu[i].children;
            var navegador = {
                displayName: essaDisplayName,
                iconName: essaIconName,
                route: essaRoute,
                children: essaChildren
            };

            novoMenu.push(navegador);
        }

        return novoMenu;
    }
}
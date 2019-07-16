import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuListItemComponent } from './menu-list-item.component';

@NgModule({
    declarations: [
        MenuListItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [MenuListItemComponent]
})
export class MenuListItemModule { }
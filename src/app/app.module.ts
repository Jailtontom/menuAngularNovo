import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuComponent } from './menus/menu/menu.component';
import { MenusModule } from './menus/menus.module';
import { MenuListItemComponent } from './menus/menu-list-item/menu-list-item.component';
import { TopoNavegadorComponent } from './menus/topo-navegador/topo-navegador.component';
import { NavegadorService } from './menus/navegador/navegador.service';
import { DialogsModule } from './dialogs/dialogs.module';
import { FormulariosComponent } from './formularios/formularios.component';

/**
 * NgModule that includes all Material modules that are required.
 */
@NgModule({
    declarations: [
        MenuListComponent,
        MenuComponent,
        FormulariosComponent
    ],
    exports: [
        // CDK
        A11yModule,
        BidiModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
        ScrollDispatchModule,
        CdkStepperModule,
        CdkTableModule,

        // Material
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatFormFieldModule
    ]
})
export class MaterialModule { }

@NgModule({
    declarations: [
        AppComponent,
        MenuListItemComponent,
        TopoNavegadorComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule,
        HttpClientModule,
        MenusModule,
        DialogsModule
    ],
    bootstrap: [AppComponent],
    providers: [NavegadorService]
})
export class AppModule { }

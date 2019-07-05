import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrimeiraComponent } from './menus/primeira/primeira.component';
import { SegundaComponent } from './menus/segunda/segunda.component';
import { TerceiraComponent } from './menus/terceira/terceira.component';
import { QuartaComponent } from './menus/quarta/quarta.component';

const routes: Routes = [
    { path: '', component: PrimeiraComponent, pathMatch: 'full' },
    {
        path: 'devfestfl', children: [
            {
                path: 'sessions', children: [
                    { path: 'my-ally-cli', component: TerceiraComponent },
                    { path: 'become-angular-tailer', component: QuartaComponent },
                    { path: 'material-design', component: PrimeiraComponent },
                    { path: 'what-up-web', component: SegundaComponent }
                ]
            },
            {
                path: 'speakers', children: [
                    {
                        path: 'michael-prentice', children: [
                            { path: 'material-design', component: PrimeiraComponent }
                        ]
                    },
                    {
                        path: 'stephen-fluin', children: [
                            { path: 'what-up-web', component: SegundaComponent }
                        ]
                    },
                    {
                        path: 'mike-brocchi', children: [
                            { path: 'my-ally-cli', component: TerceiraComponent },
                            { path: 'become-angular-tailer', component: QuartaComponent }
                        ]
                    },
                ]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogPrincipalComponent } from './dialog-principal/dialog-principal.component';
import { Ambiente } from '../ambientes/ambiente';
import { AmbienteService } from '../ambientes/ambiente.service';

@Injectable({ providedIn: 'root' })
export class DialogsService {

    ambiente: Ambiente[] = [];

    constructor(public dialog: MatDialog, private ambienteService: AmbienteService) { }

    dialogoAberto(desenvolvimento, homologacao, producao: string): void {

        var ambientesInicial = {
            desenvolvimento: desenvolvimento,
            homologacao: homologacao,
            producao: producao
        }

        var ambientes = {
            desenvolvimento: desenvolvimento,
            homologacao: homologacao,
            producao: producao
        }

        const dialogAmbiente = this.dialog.open(
            DialogPrincipalComponent, {
                width: '540px',
                data: ambientes
            }
        );

        dialogAmbiente.afterClosed().subscribe(result => {
            this.ambiente = result;

            if (typeof result != "undefined") {
                if (JSON.stringify(ambientesInicial) != JSON.stringify(result)) {
                    this.ambienteService.confirmaDesenvolvimento(result);
                }
            }
        });
    }

}

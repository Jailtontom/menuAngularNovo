import { MatButtonBase } from '@angular/material';

export interface Ambiente {
    desenvolvimento: string;
    homologacao: string;
    producao: string;
    botaoAlterar? : MatButtonBase,
    botaoDeletar? : MatButtonBase
}
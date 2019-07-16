import { MatButtonBase } from '@angular/material';

export interface FormularioAlterar {
    desenvolvimento: string;
    homologacao: string;
    producao: string;
    botaoAlterar? : MatButtonBase,
    botaoDeletar? : MatButtonBase
}
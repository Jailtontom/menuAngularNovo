import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Ambiente } from './ambiente';
import { Subject } from 'rxjs';

const API = 'http://localhost:3001';

@Injectable({ providedIn: 'root' })
export class AmbienteService {

    ambientes: Ambiente[] = [];

    // Observable string sources
    private desenvolvimentoConfirmadoSource = new Subject<Ambiente>();

    // Observable string streams
    desenvolvimentoConfirmado$ = this.desenvolvimentoConfirmadoSource.asObservable();

    constructor(private http: HttpClient) { }

    listaAmbientes() {
        return this.http.get<Ambiente[]>(API);
    }

    listaGridAmbiente(ambientes: Ambiente[]) {
        var novoAmbiente: Ambiente[] = [];

        for (let i = 0; i < ambientes.length; i++) {
            var esseDesenvolvimento = ambientes[i].desenvolvimento;
            var esseHomologacao = ambientes[i].homologacao;
            var esseProducao = ambientes[i].producao;

            var ambiente = {
                desenvolvimento: esseDesenvolvimento,
                homologacao: esseHomologacao,
                producao: esseProducao
            };

            novoAmbiente.push(ambiente);
            this.ambientes.push(ambiente);
        }

        return novoAmbiente;
    }

    // Service message commands
    confirmaDesenvolvimento(ambienteAtualizar: Ambiente) {
        this.desenvolvimentoConfirmadoSource.next(ambienteAtualizar);
        this.atualizaGridAmbiente(ambienteAtualizar);
    }

    atualizaGridAmbiente(ambiente: Ambiente) {
        var novoAmbiente: Ambiente[] = [];

        for (let i = 0; i < this.ambientes.length; i++) {
            var esseDesenvolvimento = this.ambientes[i].desenvolvimento;
            var esseHomologacao = this.ambientes[i].homologacao;
            var esseProducao = this.ambientes[i].producao;

            var esseAmbiente = {
                desenvolvimento: esseDesenvolvimento,
                homologacao: esseHomologacao,
                producao: esseProducao
            };

            if (esseAmbiente.producao == ambiente.producao) {
                var esseAmbiente = {
                    desenvolvimento: ambiente.desenvolvimento,
                    homologacao: ambiente.homologacao,
                    producao: ambiente.producao
                };
            }

            novoAmbiente.push(esseAmbiente);
        }

        return novoAmbiente;
    }
}

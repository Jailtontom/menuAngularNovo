import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Ambiente } from '../ambiente';
import { AmbienteService } from '../ambiente.service';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
    selector: 'app-tabela-ambiente',
    templateUrl: './tabela-ambiente.component.html',
    styleUrls: ['./tabela-ambiente.component.css']
})
export class TabelaAmbienteComponent implements OnInit, OnChanges {
    displayedColumns: string[] = ['desenvolvimento', 'homologacao', 'producao', 'botaoAlterar', 'botaoDeletar'];
    dataSource: MatTableDataSource<Ambiente>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private ambienteService: AmbienteService) { }

    ngOnInit() {
        this.ambienteService.listaAmbientes().subscribe(ambiente => {
            this.dataSource = new MatTableDataSource(this.ambienteService.listaGridAmbiente(ambiente));
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    ngOnChanges(): void {
        console.log('Chamou');

        this.ambienteService.desenvolvimentoConfirmado$.subscribe(ambiente => {
            this.dataSource = new MatTableDataSource(this.ambienteService.atualizaGridAmbiente(ambiente));
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}
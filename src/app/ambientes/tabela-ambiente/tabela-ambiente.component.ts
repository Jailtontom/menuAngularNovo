import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Ambiente } from '../ambiente';
import { AmbienteService } from '../ambiente.service';
import { UserData } from 'src/app/sites/userdata';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
    selector: 'app-tabela-ambiente',
    templateUrl: './tabela-ambiente.component.html',
    styleUrls: ['./tabela-ambiente.component.css']
})
export class TabelaAmbienteComponent implements OnInit {
    displayedColumns: string[] = ['desenvolvimento', 'homologacao', 'producao', 'botaoAlterar', 'botaoDeletar'];
    dataSource: MatTableDataSource<Ambiente>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    //constructor(private ambienteService: AmbienteService) { }
    constructor() {
        // Create 100 users
        const users = Array.from({ length: 150 }, (_, k) => createNewUser(k + 1));

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}

function createNewUser(id: number): Ambiente {
    return {
        desenvolvimento: "http://desenvolvimento" + id + ".com.br",
        homologacao: "http://homologacao" + id + ".com.br",
        producao: "http://producao" + id + ".com.br"
      };
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { UserData } from '../userdata';
 
/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Sistemas', 'Recursos Humanos', 'Benefícios', 'Contatos e Departamentos', 'Serviços Corporativos', 
  'Formulários', 'Normas, Manuais, Circulares e Políticas', 'Home Office', 'Conhecimento e Educação', 
  'Voluntariado e Doações', '#eumeimPORTO', 
  'Publicações', 'Sócio e Ambiental', 'Fale com'
];

@Component({
  selector: 'app-sites-aba-desenvolvimento',
  templateUrl: './sites-aba-desenvolvimento.component.html',
  styleUrls: ['./sites-aba-desenvolvimento.component.css']
})
export class SitesAbaDesenvolvimentoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

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

function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
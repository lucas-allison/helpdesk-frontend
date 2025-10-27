import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from '../../../models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css'],
})
export class TecnicoListComponent implements AfterViewInit {
  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Matheus',
      cpf: '123.456.789-00',
      email: 'teste@teste.com',
      senha: '12345',
      perfis: ['0'],
      dataCriacao: '20/10/2022',
    },
  ];

  displayedColumns: string[] = [
    'id',
    'nome',
    'cpf',
    'email',
    'acoes',
  ];

  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

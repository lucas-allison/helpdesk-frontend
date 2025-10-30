import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from '../../../models/chamado';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css'],
})

export class ChamadoListComponent {

  ELEMENT_DATA: Chamado[] = [
    {
      id: 1,
      titulo: 'Chamado 1',
      cliente: 'Cliente A',
      dataAbertura: '2024-01-15',
      prioridade: 'Alta',
      status: 'Aberto',
      descricao: 'Descrição do Chamado 1',
      nomeCliente: 'Cliente A',
      tecnico: 'Técnico X',
      nomeTecnico: 'Técnico X',
    },
  ];

  displayedColumns: string[] = [
    'id',
    'titulo',
    'cliente',
    'tecnico',
    'dataAbertura',
    'prioridade',
    'status',
    'acoes',
  ];

  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

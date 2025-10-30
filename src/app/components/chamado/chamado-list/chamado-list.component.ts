import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from '../../../models/chamado';
import { MatPaginator } from '@angular/material/paginator';
import { ChamadoService } from '../../../services/chamados/chamado.service';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css'],
})
export class ChamadoListComponent {
  ELEMENT_DATA: Chamado[] = [];
  FILTERED_DATA: Chamado[] = [];

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

  constructor(private service: ChamadoService) {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Chamado>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornaStatus(status: any): string {
    switch (status) {
      case 1:
        return 'ANDAMENTO';
      case 2:
        return 'ENCERRADO';
      default:
        return 'ABERTO';
    }
  }

  retornaPrioridade(prioridade: any): string {
    switch (prioridade) {
      case 1:
        return 'MÉDIA';
      case 2:
        return 'ALTA';
      default:
        return 'BAIXA';
    }
  }

  orderByStatus(status: any): void {
    let list: Chamado[] = [];

    this.ELEMENT_DATA.forEach((chamado) => {
      if (chamado.status == status) {
        list.push(chamado);
      }
    });

    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Chamado>(list);
    this.dataSource.paginator = this.paginator;
  }
}

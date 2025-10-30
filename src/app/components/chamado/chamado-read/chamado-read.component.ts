import { Component, OnInit } from '@angular/core';
import { ChamadoService } from '../../../services/chamados/chamado.service';
import { Chamado } from '../../../models/chamado';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.css'],
})
export class ChamadoReadComponent implements OnInit {
  chamado: Chamado = {
    prioridade: '',
    status: '',
    titulo: '',
    observacoes: '',
    tecnico: '',
    cliente: '',
    nomeCliente: '',
    nomeTecnico: '',
  };

  constructor(
    private chamadoService: ChamadoService,
    private toast: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe((resposta) => {
      this.chamado = resposta;
    }, ex => {
      this.toast.error(ex.error.error);
    });
  }

  retornaStatus(status: any): string {
    switch (status) {
      case 1:
        return 'EM ANDAMENTO';
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
}

import { Component, OnInit } from '@angular/core';
import { Credenciais } from '../../models/credenciais';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  creds: Credenciais = {
    email: '',
    senha: '',
  };

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService) {}

  logar() {
    this.toast.error('Função de login não implementada', 'Erro');
    this.creds.senha = '';
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }
}

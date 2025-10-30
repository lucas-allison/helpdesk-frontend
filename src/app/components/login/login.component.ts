import { Component, OnInit } from '@angular/core';
import { Credenciais } from '../../models/credenciais';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  logar() {
    this.service.authenticate(this.creds).subscribe({
      next: (resposta) => {
        const token = resposta.headers.get('Authorization');

        if (token) {
          this.toast.info('Login realizado com sucesso');
          this.service.successFullLogin(token.substring(7));
          this.router.navigate(['']);
        } else this.toast.error('Usuário e/ou senha inválidos');
      },
      error: () => {
        this.toast.error('Erro ao realizar login');
      },
    });
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }
}

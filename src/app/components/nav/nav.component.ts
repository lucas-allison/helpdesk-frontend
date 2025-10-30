import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['home']);
  }

  logout(): void {
    this.router.navigate(['login']);
    this.authService.logout();
    this.toast.info('Logout realizado com sucesso', 'Logout');
  }
}

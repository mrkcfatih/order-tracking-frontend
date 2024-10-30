import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-vertical fixed-start">
      <div class="navbar-brand p-4">
        <h4 class="mb-0">Admin Panel</h4>
      </div>
      <div class="navbar-nav">
        <a class="nav-link active" routerLink="/dashboard">
          <i class="fas fa-home me-2"></i>
          Ana Sayfa
        </a>
        <a class="nav-link" routerLink="/dashboard/customers">
          <i class="fas fa-users me-2"></i>
          Müşteriler
        </a>
        <a class="nav-link" (click)="logout()">
          <i class="fas fa-sign-out-alt me-2"></i>
          Çıkış Yap
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-vertical {
      width: 280px;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: white;
      box-shadow: 0 0 20px rgba(0,0,0,0.05);
      z-index: 1000;
    }
    .navbar-nav {
      padding: 1rem;
    }
    .nav-link {
      padding: 0.75rem 1rem;
      color: var(--secondary-color);
      cursor: pointer;
      border-radius: 0.5rem;
    }
    .nav-link:hover, .nav-link.active {
      background-color: #f5f8fa;
      color: var(--primary-color);
    }
  `]
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-navbar></app-navbar>
    <div class="main-content">
      <app-topbar></app-topbar>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .main-content {
      margin-left: 280px;
      transition: margin-left 0.3s;
    }
  `]
})
export class DashboardComponent {}
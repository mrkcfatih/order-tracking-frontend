import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    TopbarComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          { path: '', component: CustomerListComponent }
        ]
      }
    ])
  ]
})
export class DashboardModule { }
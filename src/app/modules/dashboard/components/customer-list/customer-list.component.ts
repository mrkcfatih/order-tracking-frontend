import { Component, OnInit } from '@angular/core';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  registrationDate: Date;
}

@Component({
  selector: 'app-customer-list',
  template: `
    <div class="container-fluid py-4">
      <div class="table-container">
        <h2 class="mb-4">Müşteri Listesi</h2>
        <p-table [value]="customers" [paginator]="true" [rows]="10"
                 [showCurrentPageReport]="true" [rowsPerPageOptions]="[10,25,50]"
                 currentPageReportTemplate="Toplam {totalRecords} müşteriden {first} ile {last} arası gösteriliyor">
          <ng-template pTemplate="header">
            <tr>
              <th>ID</th>
              <th>Ad Soyad</th>
              <th>E-posta</th>
              <th>Telefon</th>
              <th>Durum</th>
              <th>Kayıt Tarihi</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-customer>
            <tr>
              <td>{{customer.id}}</td>
              <td>{{customer.name}}</td>
              <td>{{customer.email}}</td>
              <td>{{customer.phone}}</td>
              <td>
                <span [class]="'badge ' + (customer.status === 'Aktif' ? 'bg-success' : 'bg-warning')">
                  {{customer.status}}
                </span>
              </td>
              <td>{{customer.registrationDate | date:'dd/MM/yyyy'}}</td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </div>
  `
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  ngOnInit() {
    // Örnek veri
    this.customers = [
      {
        id: 1,
        name: 'Ahmet Yılmaz',
        email: 'ahmet@example.com',
        phone: '0532 111 2233',
        status: 'Aktif',
        registrationDate: new Date('2024-01-15')
      },
      {
        id: 2,
        name: 'Ayşe Demir',
        email: 'ayse@example.com',
        phone: '0533 444 5566',
        status: 'Pasif',
        registrationDate: new Date('2024-02-01')
      },
      // Daha fazla örnek veri eklenebilir
    ];
  }
}
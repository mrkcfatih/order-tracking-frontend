import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  template: `
    <div class="topbar d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <div class="me-4">
          <i class="far fa-clock me-2"></i>
          {{ currentTime | date:'HH:mm:ss' }}
        </div>
        <div>
          <i class="fas fa-dollar-sign me-2"></i>
          Dolar: {{ exchangeRate | number:'1.2-2' }} ₺
        </div>
      </div>
      <div class="user-info">
        <img src="https://ui-avatars.com/api/?name=Admin&background=random" 
             class="rounded-circle me-2" 
             width="32" 
             height="32" 
             alt="User">
        <span>Admin</span>
      </div>
    </div>
  `
})
export class TopbarComponent implements OnInit {
  currentTime = new Date();
  exchangeRate = 0;

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });

    this.fetchExchangeRate();
    interval(300000).subscribe(() => {
      this.fetchExchangeRate();
    });
  }

  private fetchExchangeRate() {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        this.exchangeRate = data.rates.TRY;
      })
      .catch(error => console.error('Exchange rate error:', error));
  }
}
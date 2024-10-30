import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    // Burada gerçek authentication kontrolü yapılacak
    return of(true);
  }
}
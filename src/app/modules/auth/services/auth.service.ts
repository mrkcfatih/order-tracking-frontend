import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  login(credentials: {email: string, password: string}): Observable<any> {
    // Burada gerçek API entegrasyonu yapılacak
    localStorage.setItem('isLoggedIn', 'true');
    return of({ success: true });
  }

  googleLogin(): Observable<any> {
    // Google Authentication implementasyonu
    localStorage.setItem('isLoggedIn', 'true');
    return of({ success: true });
  }

  register(userData: any): Observable<any> {
    // Kayıt işlemi implementasyonu
    return of({ success: true });
  }

  resetPassword(email: string): Observable<any> {
    // Şifre sıfırlama implementasyonu
    return of({ success: true });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
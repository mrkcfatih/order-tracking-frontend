import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <h2 class="text-center mb-4">Şifre Sıfırlama</h2>
        <form [formGroup]="resetForm" (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label class="form-label">E-posta</label>
            <input type="email" class="form-control" formControlName="email">
          </div>
          <button type="submit" class="btn btn-primary w-100 mb-3">Şifre Sıfırlama Linki Gönder</button>
          <div class="text-center">
            <a routerLink="/auth/login" class="text-primary">Giriş sayfasına dön</a>
          </div>
        </form>
      </div>
    </div>
  `
})
export class ForgotPasswordComponent {
  resetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.resetForm.valid) {
      this.authService.resetPassword(this.resetForm.value.email).subscribe({
        next: () => alert('Şifre sıfırlama linki e-posta adresinize gönderildi.'),
        error: (error) => console.error('Password reset error:', error)
      });
    }
  }
}
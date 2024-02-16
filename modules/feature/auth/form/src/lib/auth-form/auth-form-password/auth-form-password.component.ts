import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from 'auth-data-access';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'lib-auth-form-password',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  email = inject(AuthFormComponent).form.controls.email.value;
  control = inject(AuthFormComponent).form.controls.password;
  authService = inject(AuthService);
  router = inject(Router);

  login(): void {
    this.authService.setEmail(this.email);
    this.router.navigate(['/']);
  }
}

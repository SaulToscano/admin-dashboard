import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ProgressSpinnerModule,
    RouterModule
  ],
})
export class Login {
  loading: boolean = false;
  loginForm: FormGroup;
  forgottenForm: FormGroup;
  forgottenPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _messageService: MessageService,
  ){
    // Ya viene pre-llenado para que sea más fácil probar el mockup
    this.loginForm = this.fb.group({
      email: ['admin@logistics.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required]
    });
    
    this.forgottenForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales inválidas' });
      return;
    }

    this.loading = true;
    
    // Simulamos el tiempo de respuesta del servidor (1.5 segundos)
    setTimeout(() => {
      this.loading = false;
      const { email } = this.loginForm.value;
      
      this._messageService.add({ severity: 'success', summary: 'Bienvenido', detail: `Hola ${email}` });
      
      // Navegamos al dashboard (ruta raíz '/')
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000);
    }, 1500);
  }

  recoverPassword() {
    if (this.forgottenForm.invalid) {
      this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Ingresa un correo válido' });
      return;
    }

    // Simulamos el envío de correo
    this._messageService.add({ severity: 'success', summary: 'Enviado', detail: 'Revisa tu bandeja de entrada' });
    
    setTimeout(() => {
      this.forgottenPassword = false;
      this.forgottenForm.reset();
    }, 1500);
  }
}

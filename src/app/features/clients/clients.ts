import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '@domain/models/client/client';
import { GetClientsUseCase } from '@domain/use-cases/client/get-clients-use-case';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
  imports: [
    CommonModule, 
    FormsModule,
    TableModule, 
    ButtonModule, 
    TagModule, 
    IconFieldModule, 
    InputIconModule, 
    InputTextModule,
    RatingModule
  ],
})
export class Clients {
  clients: Client[] = [];
  loading: boolean = true;

  constructor(private _getClients: GetClientsUseCase) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.loading = true;
    this._getClients.execute().subscribe((data) => {
      this.clients = data;
      this.loading = false;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'ACTIVE': return 'success';
      case 'UNVERIFIED': return 'warn';
      case 'SUSPENDED': return 'danger';
      default: return 'info';
    }
  }

  getTranslatedStatus(status: string) {
    switch (status) {
      case 'ACTIVE': return 'Activo';
      case 'UNVERIFIED': return 'Sin verificar';
      case 'SUSPENDED': return 'Suspendido';
      default: return status;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '@domain/models/user/user';
import { GetUsersUseCase } from '@domain/use-cases/user/get-users-use-case';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, 
    TableModule, 
    ButtonModule, 
    TagModule, 
    IconFieldModule, 
    InputIconModule, 
    InputTextModule
  ],
  templateUrl: './users.html',
})
export class Users implements OnInit {
  users: User[] = [];
  loading: boolean = true;

  constructor(private _getUsers: GetUsersUseCase) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this._getUsers.execute().subscribe((data) => {
      this.users = data;
      this.loading = false;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'ACTIVE': return 'success';
      case 'PENDING': return 'warn';
      case 'INACTIVE': return 'danger';
      default: return 'info';
    }
  }
}
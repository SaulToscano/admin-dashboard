import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

import { Permission, Role } from '@domain/models/role/role';
import { GetRolesUseCase } from '@domain/use-cases/role/get-roles-use-case';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.html',
  styleUrl: './roles.scss',
  imports: [
    CommonModule, 
    FormsModule, 
    TableModule, 
    ButtonModule, 
    TagModule, 
    DialogModule, 
    ToggleSwitchModule
  ],
})
export class Roles implements OnInit {
  roles: Role[] = [];
  permissions: Permission[] = [];
  loading: boolean = true;
  
  // Para el modal
  displayModal: boolean = false;
  selectedRole: Role | null = null;
  permissionsByModule: { [key: string]: Permission[] } = {};

  constructor(private _getRoles: GetRolesUseCase) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    forkJoin({
      roles: this._getRoles.executeRoles(),
      perms: this._getRoles.executePermissions()
    }).subscribe((res) => {
      this.roles = res.roles;
      this.permissions = res.perms;
      this.groupPermissions();
      this.loading = false;
    });
  }

  // Agrupa los permisos por módulo para mostrarlos bonitos en el HTML
  groupPermissions() {
    this.permissionsByModule = this.permissions.reduce((acc, perm) => {
      if (!acc[perm.module]) { acc[perm.module] = []; }
      acc[perm.module].push(perm);
      return acc;
    }, {} as { [key: string]: Permission[] });
  }

  openPermissionsDialog(role: Role) {
    // Clonamos el rol para no afectar la tabla si el usuario cancela
    this.selectedRole = JSON.parse(JSON.stringify(role));
    this.displayModal = true;
  }

  hasPermission(permId: string): boolean {
    return this.selectedRole?.permissions.includes(permId) || false;
  }

  togglePermission(permId: string, event: any) {
    if (!this.selectedRole) return;
    
    const isChecked = event.checked;
    if (isChecked) {
      this.selectedRole.permissions.push(permId);
    } else {
      this.selectedRole.permissions = this.selectedRole.permissions.filter(p => p !== permId);
    }
  }

  savePermissions() {
    // Aquí llamarías a tu API para guardar
    console.log('Permisos a guardar:', this.selectedRole?.permissions);
    this.displayModal = false;
  }
}

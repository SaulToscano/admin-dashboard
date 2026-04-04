import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
//import { AuthService } from '../../core/auth/auth.service';
import { Router } from "@angular/router";

import { SidebarToggleButtonComponent } from '../sidebar-toggle-button/sidebar-toggle-button';

interface CustomMenuItem extends MenuItem {
  permission?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    SidebarToggleButtonComponent,
  ],
})
export class SidebarComponent {
  @HostBinding('class.collapsed') collapsed = false;

  constructor(
    //private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  menuItems: CustomMenuItem[] = [
    { label: "Home", icon: "pi pi-objects-column", routerLink: "/" },
  ];

  adminMenuItem: CustomMenuItem[] = [
    { label: "Usuarios", icon: "pi pi-users", routerLink: "/users" },
  ];

  get filteredMenuItems(): CustomMenuItem[] {
    return this.menuItems.filter((item) => !item.permission /* || this._authService.hasPermission(item.permission) */);
  }

  get filteredAdminMenuItems(): CustomMenuItem[] {
    return this.adminMenuItem.filter((item) => !item.permission /* || this._authService.hasPermission(item.permission) */);
  }

  isAdmin() {
    return true
    //return this._authService.getUserRole()?.name === 'ADMIN' || this._authService.getUserRole()?.name === 'SUPERADMIN';
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  logout() {
    //this._authService.logout();
    this._router.navigate(["/login"]);
  }
}

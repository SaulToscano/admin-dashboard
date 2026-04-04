import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-sidebar-toggle-button',
  templateUrl: './sidebar-toggle-button.html',
  styleUrl: './sidebar-toggle-button.scss',
  imports: [ButtonModule, CommonModule],
})
export class SidebarToggleButtonComponent {
  @Output() sidebarToggled = new EventEmitter<void>();
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggled.emit();
  }
}

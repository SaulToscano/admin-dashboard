import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LayoutService } from './app-layout.service';
import { SidebarComponent } from './sidebar/sidebar';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule,
    ImageModule,
    ProgressSpinnerModule,
    SidebarComponent,
    CardModule,
  ],
  providers: [MessageService],
  template: `
    @if (loading) {
      <div class="loading-overlay">
        <p-progressSpinner strokeWidth="4"></p-progressSpinner>
      </div>
    }

    @if (showLayout) {
      <header class="flex align-items-center justify-content-between px-5 py-3 surface-card shadow-1 relative z-5">
        <div class="flex align-items-center gap-3">
           <h2 class="m-0 font-semibold text-xl">Admin Dashboard</h2>
        </div>
        
        <div class="perfil-wrapper flex align-items-center gap-3 cursor-pointer p-2 border-round hover:surface-100 transition-duration-200" routerLink="/profile">
          <div class="text-right">
            <span class="block font-bold text-900">Usuario Admin</span>
            <small class="block text-600">En línea</small>
          </div>
          <p-image src="/mockups/images/default.png" alt="profile" width="45" imageClass="border-circle shadow-2"></p-image>
        </div>
      </header>

      <div class="layout-container flex p-4 gap-4 surface-ground">
        
        <p-card class="h-full shadow-2 border-none p-0 overflow-visible" class="sidebar-card">
           <app-sidebar #sidebar [class.collapsed]="sidebarCollapsed"></app-sidebar>
        </p-card>
        
        <main class="flex-1 transition-all transition-duration-300">
           <p-card class="h-full shadow-2 border-none">
              <router-outlet></router-outlet>
           </p-card>
        </main>
        
      </div>
    } @else {
      <main class="surface-ground min-h-screen flex align-items-center justify-content-center">
        <router-outlet></router-outlet>
      </main>
    }

    <footer class="py-3 text-center surface-100 text-600 text-sm">
      <p>© 2026 Admin Dashboard • México-USA Logistics</p>
    </footer>
  `,
  styles: [`
    .layout-container { 
      min-height: calc(100vh - 75px - 50px); 
      box-sizing: border-box;
    }
    
    .loading-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(255, 255, 255, 0.8); display: flex;
      align-items: center; justify-content: center; z-index: 9999;
    }
    
    header { height: 75px; z-index: 1000; }

    ::ng-deep .sidebar-card .p-card-body {
      padding: 0 !important;
      height: 100%;
    }
    ::ng-deep .sidebar-card .p-card-content {
      padding: 0 !important;
      height: 100%;
    }
  `],
})
export class AppComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  sidebarCollapsed = false;
  showLayout = true;
  loading: boolean = false;

  constructor(
    private router: Router,
    private layoutService: LayoutService,
  ) {}

  ngOnInit() {
    let startTime: number = 0;

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login') {
          startTime = Date.now();
          this.loading = true;
        }
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        const elapsed = Date.now() - startTime;
        const delay = Math.max(1000 - elapsed, 0);
        setTimeout(() => {
          this.loading = false;
        }, delay);
      }

      if (event instanceof NavigationEnd) {
        this.showLayout = this.router.url !== '/login';
        this.layoutService.setShowLayout(this.showLayout);
      }
    });
  }

  toggleSidebar() {
    this.sidebar.toggleSidebar();
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}

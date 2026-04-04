import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  InjectionToken,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';

import { environment } from '../../../environments/environment';

import Aura from '@primeuix/themes/aura';

import { routes } from '../../app.routes';

export interface AppConfig {
  apiBaseUrl: string;
  environment: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        // exceptionInterceptor,
        // httpInterceptor
      ]),
    ),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: environment.apiBaseUrl,
        environment: environment.production ? 'production' : 'development',
      },
    },
  ],
};

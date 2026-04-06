import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  InjectionToken,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';

import { environment } from '@env/environment';

import { routes } from '@/app/app.routes';

import { HomeApiService } from '@core/services/home-api.service';
import { HomeGateway } from '@domain/models/home/gateway/home-gateway';

import { UserApiService } from '@core/services/user-api.service';
import { UserGateway } from '@domain/models/user/gateway/user-gateway';

import { ClientApiService } from '@core/services/client-api.service';
import { ClientGateway } from '@domain/models/client/gateway/client-gateway';

export interface AppConfig {
  apiBaseUrl: string;
  environment: string;
  loggingEnabled: boolean;
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
        loggingEnabled: environment.loggingEnabled,
      },
    },
    // features providers
    { provide: HomeGateway, useClass: HomeApiService },
    { provide: UserGateway, useClass: UserApiService },
    { provide: ClientGateway, useClass: ClientApiService },
  ],
};

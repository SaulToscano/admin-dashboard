import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

  log(message: string, ...args: any[]): void {
    if (this.config.loggingEnabled) {
      console.log(message, ...args);
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.config.loggingEnabled) {
      console.error(message, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.config.loggingEnabled) {
      console.warn(message, ...args);
    }
  }
}

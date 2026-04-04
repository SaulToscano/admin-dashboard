import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/core/config/app.config';
import { AppComponent } from './app/layout/app-layout';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

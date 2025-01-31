import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as AOS from 'aos';

AOS.init({
  duration: 1000,
  once: false,
  mirror: false,
  offset: 100,
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);

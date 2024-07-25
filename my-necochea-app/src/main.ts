import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app-routing.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
  providers: [
    ...appRoutingProviders
  ]
}).catch(err => console.error(err));

  

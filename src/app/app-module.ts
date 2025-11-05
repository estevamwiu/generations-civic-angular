import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header-component/header-component';
import { FooterComponent } from './footer-component/footer-component';
import { CivicGen1 } from './civic-gen-1/civic-gen-1';
import { CivicGen2 } from './civic-gen-2/civic-gen-2';
import { CivicGen3 } from './civic-gen-3/civic-gen-3';
import { CivicGen4 } from './civic-gen-4/civic-gen-4';
import { CivicGen5 } from './civic-gen-5/civic-gen-5';
import { CivicGen6 } from './civic-gen-6/civic-gen-6';
import { CivicGen7 } from './civic-gen-7/civic-gen-7';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    CivicGen1,
    CivicGen2,
    CivicGen3,
    CivicGen4,
    CivicGen5,
    CivicGen6,
    CivicGen7,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

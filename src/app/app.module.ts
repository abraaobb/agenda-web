import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';

import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from './services/config.service';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material.module";

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MaterialModule],
  providers: [ConfigService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}

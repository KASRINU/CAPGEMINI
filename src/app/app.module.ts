import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Component1Component } from './component1/component1.component';
import { LogoComponent } from './logo/logo.component';
import { Component2Component } from './component2/component2.component';
import { Slidebar2Component } from './slidebar2/slidebar2.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Component1Component,
    LogoComponent,
    Component2Component,
    Slidebar2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ Component1Component]
})
export class AppModule { }

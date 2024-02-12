import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalFooterModule } from "@name/common/ui";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@name/common/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GlobalFooterModule, BrowserAnimationsModule, AppRoutingModule, Name],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

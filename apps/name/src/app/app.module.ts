import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalFooterModule } from "@name/common/ui";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@name/common/ui";
import { GlobalFooterModule } from "@name/common/ui";
import { GlobalSidenavModule } from "@name/common/ui";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GlobalFooterModule, BrowserAnimationsModule, AppRoutingModule, Name, GlobalFooterModule, GlobalSidenavModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

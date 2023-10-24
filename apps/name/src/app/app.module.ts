import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalFooterModule } from "@name/common/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GlobalFooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

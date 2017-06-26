import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MdTabsModule } from '@angular/material';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [BrowserModule, MdTabsModule, NoopAnimationsModule],
  declarations: [AppComponent, AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

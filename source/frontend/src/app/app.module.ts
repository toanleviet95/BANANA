import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { CommonHeaderComponent } from './layouts/common-layout/components/common-header/common-header.component';
import { CommonFooterComponent } from './layouts/common-layout/components/common-footer/common-footer.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    CommonLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

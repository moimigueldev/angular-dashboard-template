import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from "./components/components.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { PerformanceComponent } from './graphs/performace/performance.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

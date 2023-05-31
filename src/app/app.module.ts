import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiJsonConsumerComponent } from './api-json-consumer/api-json-consumer.component';
import { ApiJsonTableComponent } from './api-json-table/api-json-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiJsonConsumerComponent,
    ApiJsonTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

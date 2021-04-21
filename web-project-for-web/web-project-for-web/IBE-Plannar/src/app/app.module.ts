import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TaskComponent} from "./components/task/task.component";
import {TaskTableComponent} from "./components/task-table/task-table.component";
import {Container} from "@angular/compiler/src/i18n/i18n_ast";
import {ContainerComponent} from "./components/container/container.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskTableComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

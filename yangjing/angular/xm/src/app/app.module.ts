import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import { ComponentComponent } from './day01/component/component.component';
import { HighlightDirective } from './day02/directives/highlight.directive';
import { DatagridComponent } from './day02/components/datagrid/datagrid.component';
import { HerosComponent } from './day02/components/heros/heros.component';
import { HeroComponent } from './day02/components/hero/hero.component';
import { GuandaoPipe } from './day02/guandao/guandao.pipe';
import { FwService } from './day02/fw/fw.service';

import {AppRouter} from './day02/router/router'


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HighlightDirective,
    DatagridComponent,
    HerosComponent,
    HeroComponent,
    GuandaoPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [FwService],
  bootstrap: [AppComponent]
})
export class AppModule { }

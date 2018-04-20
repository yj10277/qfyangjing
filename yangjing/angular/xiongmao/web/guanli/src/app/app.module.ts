import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import {HttpclientService} from './ajax/httpclient.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';

import {AppRouter} from './router/router';
import { GoodsComponent } from './components/index/goods/goods.component';
import { UserComponent } from './components/index/user/user.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    GoodsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    HttpModule

  ],
  providers: [HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomeModule, NotificationInterceptor, ParamInterceptor } from './home';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import localZh from '@angular/common/locales/zh-Hans'
import { registerLocaleData } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [
    {
      // 系统提供的 LOCALE_ID 就是一个 InjectionToken
      provide: LOCALE_ID,
      useValue:'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(localZh,'zh')
  }
}  

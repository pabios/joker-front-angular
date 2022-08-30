import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {httpInterceptorProviders} from "./interceptors";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import * as fr from "@angular/common/locales/fr";
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ],
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}

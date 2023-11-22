import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DongABankComponent } from './dong-abank/dong-abank.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { FakeProduct1Component } from './fake-product1/fake-product1.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

@NgModule({
  declarations: [
    AppComponent,
    DongABankComponent,
    FakeProductComponent,
    FakeProduct1Component,
    BitcoinComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    SearchProductComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

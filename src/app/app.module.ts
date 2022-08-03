import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",
    component:ViewProductComponent
  },
  {
    path:"Add",
    component:AddProductsComponent
  },
  {
    path:"Search",
    component:SearchProductComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    SearchProductComponent,
    ViewProductComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

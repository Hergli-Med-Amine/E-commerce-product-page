import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ProductgalleryComponent } from './productgallery/productgallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemincartComponent } from './itemincart/itemincart.component';
import { CartService } from './services/cart-service.service'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductdetailsComponent,
    ShoppingcartComponent,
    ProductgalleryComponent,
    ItemincartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

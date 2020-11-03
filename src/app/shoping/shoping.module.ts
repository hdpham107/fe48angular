import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartsComponent } from './carts/carts.component';
import { ShopingComponent } from './shoping.component';



@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, CartsComponent, ShopingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShopingComponent]
})
export class ShopingModule { }

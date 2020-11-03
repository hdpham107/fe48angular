import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartsComponent } from './carts/carts.component';
import { ShopingComponent } from './shoping.component';

import { MaterialModule } from '../shared/material/material.module';
import { PipeModule } from '../shared/pipe/pipe.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    CartsComponent,
    ShopingComponent,
  ],
  imports: [CommonModule, MaterialModule, PipeModule],
  exports: [ShopingComponent],
})
export class ShopingModule {}

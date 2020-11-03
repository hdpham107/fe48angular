import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [HomeComponent, MovieDetailComponent, CheckoutComponent, LayoutComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import {CartsComponent} from './carts/carts.component'

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.scss']
})
export class ShopingComponent implements OnInit {
  @ViewChild(CartsComponent) cartsComponent: CartsComponent
  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart(product: any) {
    this.cartsComponent.handleAddToCart(product)
  }

}

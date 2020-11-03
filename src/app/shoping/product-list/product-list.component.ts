import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Output() onAddToCart = new EventEmitter()

  productList: any[] = [
    {
      id: 1,
      name: 'Iphone 12 pro max',
      price: 45000000,
      imageUrl: 'assets/images/iphone12-pro-max.jpeg',
    },
    {
      id: 2,
      name: 'Samsung Note 20 Ultra',
      price: 25000000,
      imageUrl: 'assets/images/samsung-note-20.jpeg',
    },
    {
      id: 3,
      name: 'Xiaomi mi 10 pro',
      price: 15000000,
      imageUrl: 'assets/images/xiaomi-mi-10-pro.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleAddToCart(product: any) {
    this.onAddToCart.emit(product);
  }
}

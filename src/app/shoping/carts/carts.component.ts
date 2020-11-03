import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartsComponent implements OnInit {
  carts: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  handleAddToCart(product: any) {
    // Tìm xem sp đã tồn trong giỏ hàng hay chưa
    const index = this.carts.findIndex(
      (item) => item.id === product.id
    );
    // Chưa tồn tại
    if(index === -1) {
      const newProduct = {
        ...product,
        quality: 1
      }
      this.carts.push(newProduct);
    } else {
      // Đã tồn tại
      this.carts[index].quality += 1
    }

    console.log(this.carts)
  }
}

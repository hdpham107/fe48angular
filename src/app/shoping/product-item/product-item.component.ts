import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any
  @Output() onAddToCart = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.onAddToCart.emit(this.product)
  }

}

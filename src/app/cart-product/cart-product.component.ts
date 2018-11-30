import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  @Input() products: any;
  @Output() onIncrement=new EventEmitter();
  @Output() onDecrement=new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  increment(i) {
    if (this.products[i].count >= 1) {
      ++this.products[i].count;
    } else {
      this.products[i].count=2;
    }
    this.onIncrement.emit(this.products[i].count);
  }

  decrement(i) {
    if (this.products[i].count > 1) {
      --this.products[i].count;
      this.onDecrement.emit(this.products[i].count)
    }    
  }

}

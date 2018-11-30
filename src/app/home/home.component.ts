import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = [];
  count: number = 0;
  productAddedToCart: any = [];
  checkout:string='product';

  constructor(public rest: RestService, private router: Router) { }

  addToCart(i) {
        this.products[i].addedToCart = true;
        this.products[i].count = 1;
        this.count++;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      this.products = data;
    });
  }

  increment(i) {  
    if (this.products[i].count >= 1)
    ++this.products[i].count; ++this.count;
  }

  decrement(i) {
        if (this.products[i].count>1) {
          --this.count;
          --this.products[i].count;
       }
  }

  onIncrementFromCart(count){
     ++this.count
  }

  onDecrementFromCart(count){
    --this.count
 }
  redirectToCart(){
    this.checkout='checkout'; 
  }
}
